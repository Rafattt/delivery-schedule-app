import React, { Component } from 'react';
import Buttons from './Buttons.js'
import './bootstrap.min.css';

class SubmitNewDelivery extends Component {

    render(){
        return(
            <div className="new-delivery-container">
                <h1 className="new-delivery-title">Add new delivery</h1>
                <div className="title-bar1">
                <div className="title-container1 title-container">Customer#</div>
                   <div className="title-container2 title-container">Estimate#</div>
                   <div className="title-container3 title-container">Sales Order#</div>
                   <div className="title-container4 title-container">Production (Ready/Stock)</div>
                   <div className="title-container5 title-container">Amount of Doors</div>
                   <div className="title-container6 title-container">Amount of Trim</div>
                   <input className="input1 input"></input>
                   <input className="input2 input"></input>
                   <input className="input3 input"></input>
                   <input className="input4 input"></input>
                   <input className="input5 input"></input>
                   <input className="input6 input"></input>
                </div>
                <div className="title-bar2">
                <div className="title-container21 title-container">Address</div>
                   <div className="title-container22 title-container">Notes (Special Requests)</div>
                   <div className="title-container23 title-container">Contact Name and Number</div>
                   <div className="title-container24 title-container">Time</div>
                   <div className="title-container25 title-container">Initials</div>
                   <div className="title-container26 title-container">Confirmation#</div>
                   <input className="input21 input"></input>
                   <input className="input22 input"></input>
                   <input className="input23 input"></input>
                   <input className="input24 input"></input>
                   <input className="input25 input"></input>
                   <input className="input26 input"></input>
                </div>
            
                <Buttons 
                admin={this.props.admin}
                open={this.props.open}
                submit={this.props.submitButton}
                close={this.props.closeButton}
                openButton={this.props.openButton}
                />
                
                

            </div>
        )
    }
}

export default SubmitNewDelivery;