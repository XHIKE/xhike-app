
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import HomeScreen from './screens/home';
import MarketplaceScreen from './screens/marketplace';
import WalletScreen from './screens/wallet';
import AssetMarketScreen from './screens/asset-market';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="content-wrapper">
                    <Navbar />
                    <section className="content">
                        <Route exact path="/" component={HomeScreen}/>
                        <Route path="/home" component={HomeScreen}/>
                        <Route path="/marketplace" component={MarketplaceScreen}/>
                        <Route path="/wallet" component={WalletScreen}/>
                        <Route path="/assets/:assetId" component={AssetMarketScreen}/>
                    </section>
                </div>
            </Router>
        );
    }
}
