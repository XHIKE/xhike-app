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
        }
        return data;     
    }
}
