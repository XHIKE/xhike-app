import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../components/counter';
import TableData from '../components/tabledata';
import {Token} from '../services/smartcontract';
import {fetchAssetDetails, fetchLastTx, formatTotalSupply} from '../core/waves/waves-asset';

export default class AssetMarketScreen extends Component {
    constructor(props) {
        super(props);
        this.assetId = this.props.match.params.assetId;
        this.state = {}
    }

    componentDidMount() {
        this.loadAsset(this.assetId);
    }

    render() {
        return (
            <div className="container-fluid" style={{marginTop: '15px'}}>
                <div className="row">
                    <TokenStats assetId={this.assetId} 
                        walletCount={this.state.walletCount} 
                        totalSupply={this.state.totalSupply}
                        symbol={this.state.symbol}
                    />
                    <TokenTx asset={this.state.asset} />
                </div>
            </div>
        );
    }

    loadAsset(assetId) {
        fetchAssetDetails(assetId)
        .then((asset) => {
            this.asset = asset;
            this.setState({
                walletCount: asset.walletCount,
                totalSupply: formatTotalSupply(asset),
                symbol: ' ' + asset.name,
                asset: asset
            });
        });        
    }
}

class TokenStats extends Component {
    render() {
        return (
            <div>
                <Counter label="24H Volume" count={this.props.volume24H} symbol={this.props.symbol} />
                <Counter label="Total supply" count={this.props.totalSupply} symbol={this.props.symbol} />
                <Counter label="Wallets" count={this.props.walletCount} />
            </div>
        );
    }
}

class TokenTx extends Component {
    constructor(props) {
        super(props);
        this.state={
            txList: []
        };
    }

    componentDidMount() {
        this.fetchTxInterval = setInterval(() => this.loadTx(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.fetchTxInterval);
    }

    loadTx() {
        if (!this.props.asset) { 
            console.error("No asset");
            return 
        };

        fetchLastTx(this.props.asset)
        .then((txData) => {  
            console.info("txList: ", txData);
            if (txData.length == 0) {
                return;
            }
            var list=this.state.txList.concat(txData);
            this.setState({txList: list});
        });        
    }

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
                        <TableData txList={this.state.txList} />
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