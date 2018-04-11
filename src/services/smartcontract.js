const jsonInterface = require('../contract/jsonInterface.json');

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


