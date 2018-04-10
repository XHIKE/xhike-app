import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from './screens/home';
import Marketplace from './screens/marketplace';
import Wallet from './screens/wallet';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="content-wrapper">
                    <Navbar />
                    <section className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/marketplace" component={Marketplace}/>
                        <Route path="/wallet" component={Wallet}/>
                    </section>
                </div>
            </Router>
        );
    }
}

