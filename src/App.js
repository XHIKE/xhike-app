import React, { Component } from 'react';
import GoogleApiWrapper from './components/map';
import logo from './logo.svg';
import './App.css';

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
