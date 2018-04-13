import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {fetchAssets} from '../core/waves/waves-asset';
import AssetList from '../components/asset-list';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            assets: []
        };
    }

    componentDidMount() {
        this.loadTokens();
        const self=this;
        setInterval(function(){ self.loadTokens(); }, 2000);
    }

    render() {
        return (
            <div className="container-fluid" style={{marginTop: '15px'}}>
                <div className="row">
                    <AssetList data={this.state.assets} />
                </div>
            </div>
        );
    }

    loadTokens() {
        let address='3NTUMbormrfkGCprCTaYqMHtxkPuzWga9EP';
        let self=this;
        fetchAssets(address)
        .then(function (assets) {
            self.setState({assets});
        });
    }
}

