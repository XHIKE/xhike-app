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

var Web3 = require('web3');
var web3 = new Web3('ws://localhost:8545');

var args = parseArguments();

if (!args.address) {
    console.error("Address is mandatory!");
    process.exit(0);
}

web3.eth.getBalance(args.address)
.then(function (data){
    console.info("%s %s ETH", args.address, data);
});
