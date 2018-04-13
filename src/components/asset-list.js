import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export default class AssetList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title">Assets</h3>
                </div>

                <div className="box-body">
                    <div className="table-responsive">
                        <table className="table no-margin">
                            <thead>
                                <tr>
                                    {/* <th>Transaction ID</th> */}
                                    <th>Name <span className="fa fa-info-circle pull-right" style={{color: '#f39c12', paddingTop: '4px'}}></span></th>
                                    <th>AssetID <span className="fa fa-info-circle pull-right" style={{color: '#f39c12', paddingTop: '4px'}}></span></th>
                                    {/* <th>Published by</th> */}
                                    <th>Total Supply <span className="fa fa-info-circle pull-right" style={{color: '#f39c12', paddingTop: '4px'}}></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.data.map(AssetListItem)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const AssetListItem = function (props) {
    let decimals=Math.pow(10, props.decimals);
    if (decimals > 0) {
        decimals -= 1;
    }

    return (
        <tr>
            {/* <td><a href="#">{props.id}</a></td> */}
            <td>
                <a href="#">{props.name}</a>
            </td>
            <td>{props.assetId}</td>
            {/* <td>{props.author}</td> */}
            <td>
                <NumberFormat 
                    value={props.totalSupply} 
                    displayType={'text'} 
                    thousandSeparator={true}  
                    suffix={props.symbol} 
                />
                .
                {decimals}
            </td>
        </tr>
    );
}