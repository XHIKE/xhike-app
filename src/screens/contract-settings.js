import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';

export default class ContractSettings extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: '15px'}}>
                <div class="col-md-12">
                    <ContractView />
                </div>
            </div>
        );
    }
}

class ContractView extends Component {
    render() {
        return (
            <div className="box box-danger">
                <div className="box-header">
                    <h3 className="box-title">Smart Contract Settings</h3>
                </div>
                <div className="box-body">
                    <div className="form-group">
                        <label>Name</label>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fa fa-calendar"></i>
                            </div>
                            <input className="form-control" type="text" placeholder="My Contract" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fa fa-calendar"></i>
                            </div>
                            <input className="form-control" type="text" placeholder="0x00000" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>ABI</label>
                        <textarea className="textarea form-control" placeholder="Place some text here" style={{width: '100%', height: '200px', fontSize: '14px', lineHeight: '18px', border: '1px solid #dddddd', padding: '10px'}}></textarea>
                    </div>
                </div>
            </div>
        );
    }    
}