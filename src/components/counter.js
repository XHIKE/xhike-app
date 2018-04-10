import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        let conf = {
            label: 'TOTAL',
            count: '10,000,00',
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
                            {this.props.count}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
