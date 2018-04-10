import React, { Component } from 'react';
import NumberFormat from 'react-number-format';


export default class Counter extends Component {
    constructor(props) {
        super(props);
        let conf = {
            label: 'TOTAL',
            count: '0,000,00',
            icon: 'fa fa-google-plus',
            color: 'bg-gray'
        };
        this.props = props || conf;
    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="info-box">
                    <span className={this.props.color + ' info-box-icon'}><i className={this.props.icon}></i></span>
                    <div className="info-box-content">                        
                        <span className="fa fa-info-circle pull-right" style={{color: '#f39c12', paddingTop: '4px'}}></span>
                        <span className="info-box-text">
                            {this.props.label}
                        </span>
                        <span className="info-box-number">
                            <NumberFormat value={this.props.count} displayType={'text'} thousandSeparator={true}  suffix={this.props.symbol} />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
