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
let contractAddress='0x797f353506922b4be2e35acd111bb99155d88749';
if (args.address) {
    contractAddress = args.address;
}

web3.eth.subscribe('logs', {
    address: contractAddress,
    topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef']
    }, function(error, result){
        if (!error) {
            console.log("Detected event: ", result);
        } else {
            console.error("An error ocurred: ", error);
        }
    }
);

// from https://stackoverflow.com/questions/20165605/detecting-ctrlc-in-node-js
// i need a nodejs documentation
process.on('SIGINT', function() {
    console.log("===========");
    console.log("Caught interrupt signal");
    console.log("Clearing subscriptions");    
    web3.eth.clearSubscriptions();
    process.exit();
});
