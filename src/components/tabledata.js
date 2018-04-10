import React, { Component } from 'react';

// TxHash 	Block 	Age 	From 		To 	Value 	[TxFee]

export default class TableData extends Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table no-margin">
                    <thead>
                        <tr>
                            <th>TxHash</th>
                            <th>Block</th>
                            <th>Age</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Value</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="label label-success">Shipped</span></td>
                        <td>
                            <div className="sparkbar" data-color="#00a65a" data-height="20"><canvas style={{display: 'inline-block', width: '34px', height: '20px', verticalAlign: 'top'}} width="34" height="20"></canvas></div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="label label-warning">Pending</span></td>
                        <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20"><canvas style={{display: 'inline-block', width: '34px', height: '20px', verticalAlign: 'top'}} width="34" height="20"></canvas></div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="label label-danger">Delivered</span></td>
                        <td>
                            <div className="sparkbar" data-color="#f56954" data-height="20"><canvas style={{display: 'inline-block', width: '34px', height: '20px', verticalAlign: 'top'}} width="34" height="20"></canvas></div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="label label-info">Processing</span></td>
                        <td>
                            <div className="sparkbar" data-color="#00c0ef" data-height="20"><canvas style={{display: 'inline-block', width: '34px', height: '20px', verticalAlign: 'top'}} width="34" height="20"></canvas></div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="label label-warning">Pending</span></td>
                        <td>
                            <div className="sparkbar" data-color="#f39c12" data-height="20"><canvas style={{display: 'inline-block', width: '34px', height: '20px', verticalAlign: 'top'}} width="34" height="20"></canvas></div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="label label-danger">Delivered</span></td>
                        <td>
                            <div className="sparkbar" data-color="#f56954" data-height="20"><canvas style={{display: 'inline-block', width: '34px', height: '20px', verticalAlign: 'top'}} width="34" height="20"></canvas></div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="label label-success">Shipped</span></td>
                        <td>
                            <div className="sparkbar" data-color="#00a65a" data-height="20"><canvas style={{display: 'inline-block', width: '34px', height: '20px', verticalAlign: 'top'}} width="34" height="20"></canvas></div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}