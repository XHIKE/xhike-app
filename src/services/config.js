let host = window.location.host;
if (host.indexOf(':') != -1) {
    host = host.substr(0, host.indexOf(':'));
}

export var AppConfig = {
    node: `http://${host}:6861/`,
    matcher: `http://${host}:6862/`
};
