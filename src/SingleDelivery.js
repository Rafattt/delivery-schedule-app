import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import $ from 'jquery';


class SingleDelivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
      }
    

    async componentDidMount(){
        await fetch('http://localhost/api.php?table=delivery') //change localhost to your website address
      .then(response => response.json())
      .then(data => this.setState({ data }));
        console.log(this.state.data);


   
    }
    render() {
        var delDate = (this.props.deliveryDate);
        console.log(delDate);
        $.ajax({ url: 'http://localhost/createTable.php', //change localhost to your website address
             method: 'POST',
             type: 'post',
             data: {
                 delDatevar:delDate
            },
             success: function(output) {
                          console.log(output);
                      }
        });
        const cookies = new Cookies();
        cookies.set('deliveryTime', this.props.deliveryDate, { path: 'http://localhost/deliverybuild' }); //change localhost to your website address
        console.log(cookies.get('deliveryTime')); // Pacman
        return (
            <div className="new-delivery-container  animated fadeIn delay-1s">
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
                <button type="submit" className="submit-button" onClick={this.onSubmitButton} >Submit</button>
              

            </div>
        )
    }
}

export default SingleDelivery;