import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../components/counter';
import TableData from '../components/tabledata';
import Settings from '../services/smartcontract';

var Web3 = require('web3');
var web3 = new Web3("ws://localhost:8545");

window.web3 = web3;

export default class Home extends Component {    
    render() {
        return (
            <div className="container-fluid" style={{marginTop: '15px'}}>
                <div className="row">
                    <TokenStats />
                    <TokenTx />
                </div>
            </div>
        );
    }
}

class TokenStats extends Component {
    constructor(props) {
        super(props);
        let address = props.address || '0x4861c5f2563586069690b8ee9e5dec8fab626406';
        this.state = {
            volume24H: 0,
            totalSupply: 0,
            walletCount: 0,
            fromAddress: address,
            symbol: ' '
        };

        let contractData = Settings.load();
        let interface_ = JSON.parse(contractData.jsonInterface);
        let gasPriceWei='20000000000';

        this.contract = new web3.eth.Contract(interface_.abi, contractData.address, {
            from: address, // default from address
            gasPrice: gasPriceWei // default gas price in wei, 20 gwei in this case
        });

        window.contract = this.contract;
    }

    componentDidMount() {
        let self=this;
        let p1 = this.contract.methods.totalSupply()
        .call({from: this.state.fromAddress});

        let p2 = this.contract.methods.decimals()
        .call({from: this.state.fromAddress});

        self.contract.methods.symbol()
        .call({from: self.state.fromAddress})
        .then(function (symbol){
            self.setState({symbol: ' ' + symbol});
        });

        Promise.all([p1, p2])
        .then(function (ary){
            var totalSupply = ary[0];
            var decimals = ary[1];

            self.setState({totalSupply: totalSupply / Math.pow(10,decimals)});
        });
    }

    render() {
        return (
            <div>
                <Counter label="24H Volume" count={this.state.volume24H} symbol={this.state.symbol} />
                <Counter label="Total supply" count={this.state.totalSupply} symbol={this.state.symbol} />
                <Counter label="Wallets" count={this.state.walletCount} />
            </div>
        );
    }
}

class TokenTx extends Component {
    render() {
        return (
            <div className="col-sm-12">
                <div className="box box-info">
                    <div className="box-header with-border">
                        <h3 className="box-title">Last transactions</h3>

                        <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                        </div>
                    </div>

                    <div className="box-body">
                        <TableData />
                    </div>

                    <div className="box-footer clearfix">
                        {/* <a href="javascript::;" className="btn btn-sm btn-info btn-flat pull-left">Place New Order</a> */}
                        <a href="javascript::;" className="btn btn-sm btn-default btn-flat pull-right">View All</a>
                    </div>
                </div>
            </div>
        );
    }
}


