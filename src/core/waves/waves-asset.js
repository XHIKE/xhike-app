import {AppConfig} from '../../services/config';

export function fetchAssets(fromAddress) {
    return new Promise(function (resolve, reject){
        fetch(AppConfig.node+"assets/balance/"+fromAddress)
        .then(function (resp){
            resp.json()
            .then(function(data) {                
                let assets=data.balances.map(assetTransformer);
                console.info(assets);
            });
        }, reject);
    })
}

function assetTransformer(jsonAsset) {
    return {
        id: jsonAsset.id,
        assetId: jsonAsset.assetId,
        name: jsonAsset.issueTransaction.name,
        author: jsonAsset.sender,
        totalSupply: jsonAsset.issueTransaction.quantity,
        decimals: jsonAsset.issueTransaction.decimals
    };
}
