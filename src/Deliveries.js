import React, { Component } from 'react';
import $ from 'jquery';


class Deliveries extends Component {
    constructor(props) {
        
        super(props);
        this.canceled = this.canceled.bind(this);
      
        
      }
    
    canceled = () => {
        if(this.props.canceled === '1'){
            $("#del"+this.props.id).addClass('canceled');
            $("#d-inf"+this.props.id).text('CANCELED');
            $("#o-inf"+this.props.id).text('CANCELED');

        }
    }

    render(){
        this.canceled();
        return(
          
                <div className="row print animated slideInLeft faster" >
                <div className="singleDelivery col-md-12" id={"del"+this.props.id} onClick={this.props.detailsClick}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row del-info-title">
                                
                                <div className="col-md-12 delivery-info-container">
                                    <div className="row order-info">
                                        <div className="col-md-1 delivery-info"><p className="d-inf" id={"d-inf"+this.props.id}>Order Info:</p></div>
                                        <div className="col-md-11">
                                            <div className="row print-row">
                                                <div className="col-md-2 single-delivery-style">Customer:</div>
                                                <div className="col-md-2 single-delivery-style">Estimate#:</div>
                                                <div className="col-md-2 single-delivery-style">Sales Order#:</div>
                                                <div className="col-md-2 single-delivery-style">Production (Ready/Stock):</div>
                                                <div className="col-md-2 single-delivery-style">Amount of Doors:</div>
                                                <div className="col-md-2 single-delivery-style">Amount of Trim:</div>
                                            </div>
                                            <div className="row print-row">
                                                <div className="col-md-2 single-delivery-style">{this.props.customer_no}</div>
                                                <div className="col-md-2 single-delivery-style">{this.props.estimate_no}</div>
                                                <div className="col-md-2 single-delivery-style">{this.props.sales_order}</div>
                                                <div className="col-md-2 single-delivery-style">{this.props.production}</div>
                                                <div className="col-md-2 single-delivery-style">{this.props.amount_of_doors}</div>
                                                <div className="col-md-2 single-delivery-style">{this.props.amount_of_trim}</div>
                                            </div>
                                            
                        </div>
                                    </div>
                                    <div className="row del-info">
                                        <div className="col-md-1 delivery-info "><p className="o-info" id={"o-inf"+this.props.id}>Delivery Info:</p></div>
                                        <div className="col-md-11">
                                        <div className="row print-row">
                                                <div className="col-md-2 single-delivery-style">Address:</div>
                                                <div className="col-md-3 single-delivery-style">Notes (Special Request)#:</div>
                                                <div className="address col-md-2 single-delivery-style">Contact Name and #:</div>
                                                <div className="address col-md-1 single-delivery-style">Time:</div>
                                                <div className="address col-md-2 single-delivery-style">Initials:</div>
                                                <div className="address col-md-2 single-delivery-style">Confirmation:</div>
                                            </div>
                                            <div className="row print-row">
                                                <div className="col-md-2 single-delivery-style">{this.props.address}</div>
                                                <div className="col-md-3 single-delivery-style">{this.props.notes}</div>
                                                <div className="address col-md-2 single-delivery-style">{this.props.contact}</div>
                                                <div className="address col-md-1 single-delivery-style">{this.props.time}</div>
                                                <div className="address col-md-2 single-delivery-style">{this.props.initials}</div>
                                                <div className="address col-md-2 single-delivery-style">{this.props.confirmation}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-11">
                           
                           
                        </div>
                    </div>
                    
                 
                   
                    
                  
                </div>
                </div>
           
        )
    }
}

export default Deliveries;