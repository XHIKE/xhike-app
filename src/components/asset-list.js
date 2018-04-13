import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class AssetList extends Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table no-margin">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>AssetID</th>
                            <th>Name</th>
                            <th>Published by</th>
                            <th>Total Supply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(AssetListItem)}
                    </tbody>
                </table>
            </div>
        );
    }
}

const AssetListItem = function (props) {
    return (
        <tr>
            <td><a href="#">{props.id}</a></td>
            <td>{props.assetId}</td>
            <td>{props.name}</td>
            <td>{props.author}</td>
            <td>{props.totalSupply}</td>
        </tr>
    );
}