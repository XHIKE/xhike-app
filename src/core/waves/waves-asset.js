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

function assetTransformer(jsonAsset) {
    let decimals = jsonAsset.issueTransaction.decimals;
    let totalSupply = jsonAsset.issueTransaction.quantity;

    return {
        id: jsonAsset.id,
        key: jsonAsset.assetId,
        assetId: jsonAsset.assetId,
        name: jsonAsset.issueTransaction.name,
        author: jsonAsset.sender,
        totalSupply: totalSupply,
        decimals: decimals
    };
}


