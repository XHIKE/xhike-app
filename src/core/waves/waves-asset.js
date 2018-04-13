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
                resolve(data);
            });
        }, reject);
    });
}

function assetTransformer(jsonAsset) {
    let decimals = jsonAsset.issueTransaction.decimals;
    let totalSupply = jsonAsset.issueTransaction.quantity;
    if (decimals > 0) {
        totalSupply = totalSupply / Math.pow(10, decimals);
    }

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
