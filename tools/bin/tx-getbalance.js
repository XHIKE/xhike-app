System.register("utils", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function parseArguments() {
        var result = Object.create(null);
        process.argv.forEach(function (argument) {
            if (argument.indexOf('=') != -1) {
                var index = argument.indexOf('=');
                var name_1 = argument.substr(0, index);
                var value = argument.substr(index + 1);
                result[name_1] = value;
            }
            else {
                result[argument] = true;
            }
        });
        return result;
    }
    exports_1("default", parseArguments);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("tx-getbalance", ["utils"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var utils_1, Web3, web3, args;
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            Web3 = require('web3');
            web3 = new Web3('ws://localhost:8545');
            args = utils_1["default"]();
            if (!args.address) {
                console.error("Address is mandatory!");
                process.exit(0);
            }
            web3.eth.getBalance(args.address)
                .then(function (data) {
                console.info("%s %s ETH", args.address, data);
            });
        }
    };
});
