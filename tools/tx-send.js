var Web3 = require('web3');
var web3 = new Web3('ws://localhost:8545');

var txData = {
    from: '0xd039a54e32f2c583d3cb4d19e0bd67e0040daf69', 
    to: '0x4861c5f2563586069690b8ee9e5dec8fab626406',
    amount: '1000000'
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

