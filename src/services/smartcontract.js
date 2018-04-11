const jsonInterface = require('./jsonInterface.json');

var Web3 = require('web3');

let host = window.location.host;
if (host.indexOf(':') != -1) {
    host = host.substr(0, host.indexOf(':'));
}

var web3 = new Web3("ws://"+ host +":8545");

window.web3 = web3;


export default class Settings {
    static setAddress(value) {
        localStorage.setItem('sm_address', value);
        return value;
    }

    static getAddress() {
        return localStorage.getItem('sm_address');
    }

    static save(data) {
        let json = JSON.stringify(data);
        localStorage.setItem('sm_data', json);
        return data;
    }

    static load() {
        let rawJson = localStorage.getItem('sm_data');
        let data = {};
        if (rawJson) {
            data = JSON.parse(rawJson);
        } else {
            data = {
                name: 'XHIKE Coin',
                address: '0x66ed3c33f339dcc7d6298fb109b6b6384cf6226e',
                jsonInterface: JSON.stringify(jsonInterface)
            }
        }
        return data;     
    }
}

export class Token {
    static name() {        
        return new Promise(function (resolve, reject){
            // totalSupply: totalSupply / Math.pow(10,decimals)
            resolve('XHIKE');
        });
    }

    static symbol() {        
        return new Promise(function (resolve, reject){
            // totalSupply: totalSupply / Math.pow(10,decimals)
            resolve('XHK');
        });
    }

    static totalSupply() {
        return new Promise(function (resolve, reject){
            // totalSupply: totalSupply / Math.pow(10,decimals)
            resolve(58000000);
        });
    }

    static volume24H(){
        return new Promise(function (resolve, reject){
            resolve(1244560);
        });
    }

    static filterTx(start, limit) {
        return new Promise(function (resolve, reject){
            resolve([]);
        });
    }

    static getTx(txHash){        
        return new Promise(function (resolve, reject){
            resolve([]);
        });
    }

    static getBlock(blockTash) {        
        return new Promise(function (resolve, reject){
            resolve([]);
        });
    }

    static getAsset(assetId) {
        return new Promise(function (resolve, reject){
            resolve([]);
        });        
    }

    static getAllAssets() {
        return new Promise(function (resolve, reject){
            resolve([]);
        });        
    }
}

