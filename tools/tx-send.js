var Web3 = require('web3');
var web3 = new Web3('ws://localhost:8545');

function parseArguments() {
    const result = Object.create(null);
    process.argv.forEach((argument) => {
        if (argument.indexOf('=') != -1) {
            const index = argument.indexOf('=');
            const name = argument.substr(0, index);
            const value = argument.substr(index + 1);
            result[name] = value;
        }
        else {
            result[argument] = true;
        }
    });
    return result;
}

let args=parseArguments();
let asset='eth';
let fromAddress=args.from || '0xd039a54e32f2c583d3cb4d19e0bd67e0040daf69';
let toAddress= args.to || '0x4861c5f2563586069690b8ee9e5dec8fab626406';
let amount=args.amount || '10000000000000000000';

var txData = {
    from: fromAddress, 
    to: toAddress,
    value: amount
};

web3.eth.sendTransaction(txData)
.once('transactionHash', function(hash){ 
    console.info("got hash: ", hash);
})
.once('receipt', function(receipt){ 
    console.info("got receipt: ", receipt);
})
.on('confirmation', function(confNumber, receipt){ 
    console.info("got confirmations: ", confNumber);    
})
.on('error', function(error){
    console.info("an error has ocurred: ", error);    
})
.then(function(receipt){
    console.info("tx has mined: ", receipt);    
    process.exit(0);
});

