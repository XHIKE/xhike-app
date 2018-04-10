import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../components/counter';
import TableData from '../components/tabledata';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <CoinStats />
                    <LastTx />
                </div>
            </div>
        );
    }
}

class CoinStats extends Component {
    render() {
        return (
            <div>
                <Counter label="24H Volume" count="2,400,000 XHK" />
                <Counter label="Circulating supply" count="6,426,123 XHK" />
                <Counter label="Wallets" count="240,000" />
            </div>
        );
    }
}

class LastTx extends Component {
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


