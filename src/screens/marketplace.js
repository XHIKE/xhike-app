import React, { Component } from 'react';
import GoogleApiWrapper from '../components/map';

export default class Marketplace extends Component {
    render() {
        return (
            <div className="App">
                <h1>Marketplace</h1>
                <GoogleApiWrapper />
            </div>
        );
    }
}

