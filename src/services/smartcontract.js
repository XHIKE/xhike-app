export default class Settings {
    static setAddress(value) {
        localStorage.setItem('sm_address', value);
        return value;
    }

    static getAddress() {
        return localStorage.getItem('sm_address');
    }
}
