import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {fetchAssets} from '../core/waves/waves-asset';
import AssetList from '../components/asset-list';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            assets: []
        };
    }

    componentWillMount() {

    }

    render() {
        let address='3NV8cwQH4YCoqrTxFYhedf4CBw5G2N14P6r';        

        fetchAssets(address)
        .then(function (assets){
            console.info("assets: ", assets);
            this.setState({
                assets: assets
            });
        }, function (error){
            console.error(error);
        });

        return (
            <div className="container-fluid" style={{marginTop: '15px'}}>
                <div className="row">
                    <AssetList data={this.state.assets} />
                </div>
            </div>
        );
    }
}

