import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export default class Navbar extends Component {
    render() {
        return (
            <section className="content-header" id="app-navbar">
                <div className="">
                    <div className="row">
                        <MenuItemList />

                        <div className="col-sm-4" style={{textAlign: "center"}}>
                            <Route exact path="/" component={() => <h1>XHIKE Network</h1>}/>
                            <Route path="/home" component={() => <h1>XHIKE Network</h1>}/>
                            <Route path="/marketplace" component={() => <h1>Marketplace</h1>}/>
                            <Route path="/wallet" component={() => <h1>My Wallet</h1>}/>
                            <Route path="/contract/settings" component={() => <h1>Smart Contract</h1>}/>
                        </div>

                        <CoinBalance />
                    </div>
                </div>
            </section>
        );
    }
}

class CoinBalance extends Component {
    render() {
        return (
            <div className="col-sm-4 pull-right" style={{textAlign: "right"}} title="Your balance">
                <h2>
                    0<span className="xk-money-decimal">.00</span> <small>XHK</small>
                </h2>
            </div>
        );
    }
}

class MenuItemList extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <div className="navbar-custom-menu pull-left">
                    <ul className="nav navbar-nav">
                        <li className="dropdown messages-menu active">
                            <Link activeClassName="topMenuActive" to={'/home'}>
                                <i className="fa fa-home"></i>
                            </Link>
                        </li>

                        <li className="dropdown notifications-menu">
                            <Link activeClassName="topMenuActive" to={'/marketplace'}>
                                <i className="fa fa-map"></i>
                            </Link>
                        </li>

                        <li className="dropdown tasks-menu">
                            <Link activeClassName="topMenuActive" to={'/wallet'}>
                                <i className="fa fa-lock"></i>
                            </Link>
                        </li>

                        {/* <li className="dropdown tasks-menu">
                            <Link activeClassName="topMenuActive" to={'/contract/settings'}>
                                <i className="fa fa-balance-scale"></i>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        );
    }
}