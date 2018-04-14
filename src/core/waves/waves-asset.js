import {AppConfig} from '../../services/config';

export function fetchAssets(fromAddress) {
    return new Promise(function (resolve, reject){
        fetch(AppConfig.node+"assets/balance/"+fromAddress)
        .then(function (resp){
            resp.json()
            .then(function(data) {
                let assets=data.balances.map(assetTransformer);
                resolve(assets);
            });
        }, reject);
    });
}

export function fetchAssetDetails(assetId) {
    return new Promise(function (resolve, reject){
        fetch(AppConfig.node+"assets/details/"+assetId)
        .then(function (resp){
            resp.json().then(function(data) {
                fetch(AppConfig.node+"assets/"+assetId+"/distribution")
                .then(function (resp2){
                    resp2.json()
                    .then(function (dist) {
                        var addresses = Object.keys(dist);
                        var walletCount = addresses.length;
                        data.walletCount = walletCount;
                        resolve(data);               
                    }, reject);
                }, reject);
            });
        }, reject);
    });
}

export function formatTotalSupply(asset) {
    const decimals = asset.decimals;
    let totalSupply = asset.quantity;
    let decimalsFmt;

    if (decimals > 0) {
        const decimalsSq=Math.pow(10, decimals);
        totalSupply = totalSupply / decimalsSq;
        decimalsFmt = `.${decimalsSq - 1}`;
    } else {
        decimalsFmt = '';        
    }

    return totalSupply + decimalsFmt;
}

export function fetchLastTx(asset) {
    let assetId = asset.assetId;
    return new Promise(function (resolve, reject){
        getAssetHeight(assetId)
        .then(function (height) {
            fetchAssetTxAtBlock(height, asset)
            .then((txList) => {
                updateAssetHeight(assetId, parseInt(height)+1);
                resolve(txList);
            }, reject);
        }, reject);
    });
}

function fetchAssetTxAtBlock(height, asset) {
    let assetId = asset.assetId;
    return new Promise(function (resolve, reject) {
        fetch(AppConfig.node+"blocks/at/"+height)
        .then((data) => {
            data.json()
            .then(resp => {
                if (resp.status && resp.status == "error") {
                    reject([]);
                    return;
                }

                let block=resp;
                let tx=block.transactions.filter((t) => t.assetId == assetId);
                // to avoid division by zero
                let decimals = Math.max(Math.pow(10, asset.decimals), 1);

                tx.forEach((t) => { 
                    t.height = block.height;
                    t.blockHash = block.reference;
                    t.amountFmt = t.amount / decimals;
                });
                resolve(tx);
            }, reject);
        }, reject);
    });
}

function updateAssetHeight(assetId, newHeight) {    
    return new Promise(function (resolve, reject){
        const key=assetId + '_chain_height';    
        localStorage.setItem(key, newHeight);
        resolve(newHeight);
    });
}

function getAssetHeight(assetId) {
    return new Promise(function (resolve, reject){
        const key=assetId + '_chain_height';
        const asset_height = localStorage.getItem(key);

        if (!asset_height) {
            fetchAssetDetails(assetId)
            .then(function (asset) {
                localStorage.setItem(key, asset.issueHeight);
                resolve(asset.issueHeight);
            }, reject);
        } else {
            resolve(asset_height);       
        }
    });
}

function assetTransformer(jsonAsset) {
    let decimals = jsonAsset.issueTransaction.decimals;
    let totalSupply = jsonAsset.issueTransaction.quantity;

    return {
        id: jsonAsset.id,
        key: jsonAsset.assetId,
        assetId: jsonAsset.assetId,
        name: jsonAsset.issueTransaction.name,
        author: jsonAsset.sender,
        quantity: totalSupply,
        decimals: decimals
    };
}


