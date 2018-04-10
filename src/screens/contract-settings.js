import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';
import Settings from '../services/smartcontract';

export default class ContractSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: false
        };
    }

    render() {
        let settings = Settings.load();
        return (
            <div className="container" style={{marginTop: '15px'}}>
                <div className="col-md-12">
                    <ContractView onSave={this.saveContract} data={settings} />
                </div>
            </div>
        );
    }

    saveContract(contractData) {
        console.info("contractData: ", contractData);
        Settings.save(contractData);
    }
}

class ContractView extends Component {
    constructor(props) {
        super(props);
        let data = props.data || {};

        this.state = {
            name: data.name || 'My Contract',
            address: data.address || '0xasd',
            jsonInterface: data.jsonInterface || '{}'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        if (this.props.onSave) {
            try {
                this.props.onSave(this.state);
            } finally {
                event.preventDefault();                
            }
        }
    }

    render() {
        return (
            <div className="box box-danger">
                <div className="box-header">
                    <h3 className="box-title">Settings</h3>
                </div>
                <div className="box-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-calendar"></i>
                                </div>
                                <input className="form-control" type="text"
                                    required 
                                    name="name"
                                    placeholder="My Contract" 
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-calendar"></i>
                                </div>
                                <input className="form-control" 
                                       required
                                       name="address"
                                       type="text" 
                                       placeholder="0x00000" 
                                       value={this.state.address}
                                       onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>JSON</label>
                            <textarea className="textarea form-control" 
                                required
                                name="jsonInterface"
                                placeholder="{}" 
                                style={{width: '100%', height: '200px', fontSize: '14px', lineHeight: '18px', border: '1px solid #dddddd', padding: '10px'}}
                                value={this.state.jsonInterface}
                                onChange={this.handleChange}></textarea>
                        </div>

                        <div className="row">
                            <div className="col-sm-2">
                                <button type="submit" className="btn btn-success btn-lg">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function Notification(props) {
    return (
        <div className="col-sm-5 pull-right">
            <div className="alert alert-{{props.level}}">
                <i className="fa fa-check"></i>&nbsp;&nbsp;
                <span className="text-center">{props.msg}</span>
            </div>
        </div>
    );
}
