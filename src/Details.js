import React, { Component } from 'react';
import $ from 'jquery';

class Details extends Component {
    constructor(props) {
        super(props);
        this.adminOptions=this.adminOptions.bind(this);
        this.onSaveButton = this.onSaveButton.bind(this);
        this.onDeleteButton=this.onDeleteButton.bind(this);
        this.state = {
            id: this.props.id,
            customer_no: this.props.customer_no,
            estimate_no: this.props.estimate_no,
            sales_order: this.props.sales_order,
            production: this.props.production,
            amount_of_doors: this.props.amount_of_doors,
            amount_of_trim: this.props.amount_of_trim,
            address: this.props.address,
            notes: this.props.notes,
            contact: this.props.contact,
            time: this.props.time,
            initials: this.props.initials,
            confirmation: this.props.confirmation,
            admin: this.props.admin
        };
        
      }
      handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
           
        })
      }
   
        adminOptions=()=> {
         
            if(this.state.admin!== '1'){
                return(
                    <>
                <div className="col-md-4"><button type="button" disabled className="btn btn-success detail-buttons">Save</button></div>
                <div className="col-md-4"><button type="button" disabled className="btn btn-danger detail-buttons">Delete</button></div>
                </>
                )
            } else {
              return(
                  <>
              <div className="col-md-4"><button type="button" onClick={this.onSaveButton} className="btn btn-success detail-buttons">Save</button></div>
              <div className="col-md-4"><button type="button" onClick={this.onDeleteButton}  className="btn btn-danger detail-buttons">Delete</button></div>
              </>
              )
            }
        }

        onSaveButton = (e) =>{
            e.preventDefault();
            var id = (this.props.id);
            $.ajax({ url: 'http://localhost/update.php', //change localhost to your website address
            method: 'POST',
            type: 'post',
            data: {
                delDatevar:this.props.delDate,
                id: id,
                customer_no: $(".customer_no_details").find('input[name="customer_no"]').val(),
                estimate_no: $(".estimate_no_details").find('input[name="estimate_no"]').val(),
                sales_order: $(".sales_order_details").find('input[name="sales_order"]').val(),
                production: $(".production_details").find('input[name="production"]').val(),
                amount_of_doors: $(".amount_of_doors_details").find('input[name="amount_of_doors"]').val(),
                amount_of_trim: $(".amount_of_trim_details").find('input[name="amount_of_trim"]').val(),
                address: $(".address_details").find('input[name="address"]').val(),
                notes: $(".notes_details").find('input[name="notes"]').val(),
                contact: $(".contact_details").find('input[name="contact"]').val(),
                time: $(".time_details").find('input[name="time"]').val(),
                initials: $(".initials_details").find('input[name="initials"]').val(),
                confirmation: $(".confirmation_details").find('input[name="confirmation"]').val(),
                created_by: this.props.created_by,
                submit_time: this.props.submit_time,
                edited_by:this.props.username,
                edit_time:new Date()
            },
            success: function(output) {
                      console.log(output);
                      alert('Delivery updated');
                      //window.location.reload();
                      
                  }
                  
               
    });
       
    
        }

        onDeleteButton = (e) =>{
            e.preventDefault();
            var id = (this.props.id);
            $.ajax({ url: 'http://localhost/update.php', //change localhost to your website address
            method: 'POST',
            type: 'post',
            data: {
                delDatevar:this.props.delDate,
                id: id,
                canceled:1
            },
            success: function(output) {
                      console.log(output);
                      alert('Delivery canceled');
                      //window.location.reload();
                      
                  }
                     
                  
                  
               
    });
       
    
        }
      
      
    render(){
        return(
            <div className="row details-container">
                <div className="row col-md-12">
                    <div className="delivery-ticket-details delivery-details col-md-4">Customer #:</div>
                    <div className="picklist-details delivery-details col-md-4">Estimate #:</div>
                    <div className="customer-details delivery-details col-md-4">Sales Order #:</div>
                </div>
                <div className="row col-md-12">
                    <div className="delivery-ticket-details delivery-details col-md-4 customer_no_details"><input name="customer_no" onChange={this.handleChange.bind(this)} value={this.state.customer_no}></input></div>
                    <div className="picklist-details delivery-details col-md-4 estimate_no_details"><input name="estimate_no" onChange={this.handleChange.bind(this)} value={this.state.estimate_no}></input></div>
                    <div className="customer-details delivery-details col-md-4 sales_order_details"><input name="sales_order" onChange={this.handleChange.bind(this)} value={this.state.sales_order}></input></div>
                </div>
                <div className="row col-md-12">
                    <div className="estimate-details delivery-details col-md-4">Production (Ready/Stock):</div>
                    <div className="salesorder-details delivery-details col-md-4">Amount of Doors:</div>
                    <div className="prod-details delivery-details col-md-4">Amount of Trim:</div>
                </div>
                <div className="row col-md-12">
                    <div className="estimate-details delivery-details col-md-4 production_details"><input name="production" onChange={this.handleChange.bind(this)} value={this.state.production}></input></div>
                    <div className="salesorder-details delivery-details col-md-4 amount_of_doors_details"><input name="amount_of_doors" onChange={this.handleChange.bind(this)} value={this.state.amount_of_doors}></input></div>
                    <div className="prod-details delivery-details col-md-4 amount_of_trim_details"><input name="amount_of_trim" onChange={this.handleChange.bind(this)} value={this.state.amount_of_trim}></input></div>
                </div>
                <div className="row col-md-12">
                    <div className="address-details delivery-details col-md-4">Address:</div>
                    <div className="time-details delivery-details col-md-4">Notes (Special Requests):</div>
                    <div className="size-details delivery-details col-md-4">Contact Name and Number:</div>
                </div>
                <div className="row col-md-12">
                    <div className="address-details delivery-details col-md-4 address_details"><input name="address" onChange={this.handleChange.bind(this)} value={this.state.address}></input></div>
                    <div className="time-details delivery-details col-md-4 notes_details"><input name="notes" onChange={this.handleChange.bind(this)} value={this.state.notes}></input></div>
                    <div className="size-details delivery-details col-md-4 contact_details"><input name="contact" onChange={this.handleChange.bind(this)} value={this.state.contact}></input></div>
                </div>
                <div className="row col-md-12">
                    <div className="notes-details delivery-details col-md-4">Time:</div>
                    <div className="contact-details delivery-details col-md-4">Initials:</div>
                    <div className="initials-details delivery-details col-md-4">Confirmation #:</div>
                </div>
                <div className="row col-md-12">
                    <div className="notes-details delivery-details col-md-4 time_details"><input name="time" onChange={this.handleChange.bind(this)} value={this.state.time}></input></div>
                    <div className="contact-details delivery-details col-md-4 initials_details"><input name="initials" onChange={this.handleChange.bind(this)} value={this.state.initials}></input></div>
                    <div className="initials-details delivery-details col-md-4 confirmation_details"><input name="confirmation" onChange={this.handleChange.bind(this)} value={this.state.confirmation}></input></div>
                </div>
                <div className="row col-md-12">
                    <div className="col-md-4"><button type="button" className="btn btn-light detail-buttons" onClick={this.props.back}>Back</button></div>
                    {this.adminOptions()}
                    
                    
                    
                </div>

                Created by {this.props.created_by} on {this.props.submit_time.split('GMT-0500 (Central Daylight Time)')}<br />
                Last edited by {this.props.edited_by} on {this.props.edit_time.split('GMT-0500 (Central Daylight Time)')}
                
                {this.props.back}
            </div>
              
           
        )
    }
}

export default Details;