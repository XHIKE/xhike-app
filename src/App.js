import React, { Component } from 'react';
import GoogleApiWrapper from './components/map';
import './App.css';

var web3 = require('web3');

class App extends Component {
    render() {
        return (
            <div className="App">
                <GoogleApiWrapper />
            </div>
        );
    }
}

export default App;
