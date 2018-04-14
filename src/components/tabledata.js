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
                        {this.props.txList.map(TxListItem)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function TxListItem(props) {
    return (
        <tr>
            <td><a href="#">{props.id}</a></td>
            <td>{props.blockHeight}</td>
            <td>{props.timestamp}</td>
            <td>{props.sender}</td>
            <td>{props.recipient}</td>
            <td>{props.amountFmt}</td>
            <td>
                {props.fee}
            </td>
        </tr>
    );
}