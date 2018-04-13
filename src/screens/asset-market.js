import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../components/counter';
import TableData from '../components/tabledata';
import {Token} from '../services/smartcontract';
import {fetchAssetDetails} from '../core/waves/waves-asset';

export default class AssetMarketScreen extends Component {
    constructor(props) {
        super(props);
        this.assetId = this.props.match.params.assetId;
        this.state = {            
        }
    }

    componentDidMount() {
        const self = this;
        fetchAssetDetails(this.assetId)
        .then(function (asset) {
            self.asset = asset;
        });
    }

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
    }

    componentDidMount() {
        // let self=this;
        // let supply = Token.totalSupply();
        // let volume24H = Token.volume24H();
        // let symbol = Token.symbol();
        // let wallets = Token.countWallets();

        // Promise.all([supply, volume24H, symbol, wallets])
        // .then(function (ary){
        //     self.setState({
        //         volume24H: ary[1],
        //         totalSupply: ary[0],
        //         symbol: ' ' + ary[2],
        //         walletCount: ary[3]
        //     });
        // });
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