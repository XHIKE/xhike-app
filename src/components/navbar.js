import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <section className="content-header" id="app-navbar">
                <div className="">
                    <div className="row">
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
                                            <i className="fa fa-balance-scale"></i>
                                        </Link>
                                    </li>

                                    <li className="dropdown tasks-menu">
                                        <Link activeClassName="topMenuActive" to={'/wallet'}>
                                            <i className="fa fa-lock"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4" style={{textAlign: "center"}}>
                            <Route exact path="/" component={() => <h1>Home</h1>}/>
                            <Route path="/home" component={() => <h1>Home</h1>}/>
                            <Route path="/marketplace" component={() => <h1>Marketplace</h1>}/>
                            <Route path="/wallet" component={() => <h1>Wallet</h1>}/>
                        </div>

                        <div className="col-sm-4 pull-right" style={{textAlign: "right"}} title="Your balance">
                            <h2>
                                250<span className="xk-money-decimal">.19</span> <small>XHK</small>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}