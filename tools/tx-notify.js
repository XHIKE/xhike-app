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

web3.eth.subscribe('pendingTransactions', function(error, result){
    if (!error)
        console.log("Result: ", result);
})
.on("data", function(transaction){
    console.log(transaction);
});

// from https://stackoverflow.com/questions/20165605/detecting-ctrlc-in-node-js
// i need a nodejs documentation
process.on('SIGINT', function() {
    console.log("===========");
    console.log("Caught interrupt signal");
    console.log("Clearing subscriptions");

    // TODO: fix the exception here
    // web3.eth.clearSubscriptions();
    process.exit();
});
