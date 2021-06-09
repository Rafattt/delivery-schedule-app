import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'universal-cookie';
import SubmitNewDelivery from './SubmitNewDelivery.js';
import Deliveries from './Deliveries.js';
import Details from './Details.js';
import './bootstrap.min.css';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.checkIfClosed = this
      .checkIfClosed
      .bind(this);
    this.state = {
      data: '',
      deliveries: [],
      key: [],
      detailsON: false,
      deliveryDetails: [],
      open: '1'
    };

  }

  UNSAFE_componentWillMount() {
    $.ajax({
      url: 'http://localhost/createTable.php', //change localhost to your website address
      method: 'POST',
      type: 'post',
      data: {
        delDatevar: this.props.deliveryDate
      },
      success: function (output) {
        console.log(output);
      }
    });
  }

  fetchData() {

    fetch('http://localhost/api.php?table=delivery' + this.props.deliveryDate.replace(/\//g, "")) //change localhost to your website address
      .then(response => response.json())
      .then(data => this.setState({data}));
    this.setState({state: this.state});

    if (this.state.loaded < 3) {
      this.newDelivery();
    }

  }

  componentDidUpdate(prevProps, prevState) {
    
    this.checkIfClosed();
    let updatedArray = [];
    if (prevState.data !== this.state.data) {
      setTimeout(function () {
        let delArray = [...this.state.deliveries];
        if(delArray[0] !== undefined){
        
        }

        for (let i = 0; i <= this.state.data.length; i++) {
          if (this.state.data[i] !== undefined) {
           
            updatedArray.push(< Deliveries key = {i}
                id= {this.state.data[i].id}
                classNumber = {i}
                delnumber = {this.state.data[i].id}
                customer_no = {this.state.data[i].customer_no}
                estimate_no = {this.state.data[i].estimate_no}
                sales_order = {this.state.data[i].sales_order}
                production = {this.state.data[i].production}
                amount_of_doors = {this.state.data[i].amount_of_doors}
                amount_of_trim = {this.state.data[i].amount_of_trim}
                address = {this.state.data[i].address}
                notes = {this.state.data[i].notes}
                contact = {this.state.data[i].contact}
                time = {this.state.data[i].time}
                initials = {this.state.data[i].initials}
                confirmation = {this.state.data[i].confirmation}
                detailsClick = {this.detailsON.bind(this, i)}
                edit_time = {new Date()}
                open = {this.state.data[0].open}
                canceled = {this.state.data[i].canceled} />,
            );
             
          
          } else {}
         
        }
        this.setState({deliveries: updatedArray});
        console.log(updatedArray);
 
      }.bind(this), 100);
    }

  }

  async componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 1000);
   
    

  }

  detailsON = (i) => {
    if (this.state.detailsON === false) {
      this.setState({detailsON: true});
      this.setState({
        deliveryDetails: {
          id: this.state.data[i].id,
          customer_no: this.state.data[i].customer_no,
          estimate_no: this.state.data[i].estimate_no,
          sales_order: this.state.data[i].sales_order,
          production: this.state.data[i].production,
          amount_of_doors: this.state.data[i].amount_of_doors,
          amount_of_trim: this.state.data[i].amount_of_trim,
          address: this.state.data[i].address,
          notes: this.state.data[i].notes,
          contact: this.state.data[i].contact,
          time: this.state.data[i].time,
          initials: this.state.data[i].initials,
          confirmation: this.state.data[i].confirmation,
          submit_time: this.state.data[i].submit_time,
          created_by: this.state.data[i].created_by,
          admin: this.props.cookies.admin,
          edited_by: this.state.data[i].edited_by,
          edit_time: this.state.data[i].edit_time
        },
        data: {
          open: this.state.data[0].open
        }

      });
    } else if (this.state.detailsON === true) {
      this.setState({detailsON: false});

    }

  }

  newDelivery = () => {
    for (let i = 0; i <= this.state.data.length; i++) {
      if (this.state.data[i] !== undefined && !this.state.key.includes(i)) {
        this.setState({
          deliveries: [
            ...this.state.deliveries, < Deliveries key = {i}
            classNumber = {i}
            delnumber = {this.state.data[i].id}
            customer_no = {this.state.data[i].customer_no}
            estimate_no = {this.state.data[i].estimate_no}
            sales_order = {this.state.data[i].sales_order}
            production = {this.state.data[i].production}
            amount_of_doors = {this.state.data[i].amount_of_doors}
            amount_of_trim = {this.state.data[i].amount_of_trim}
            address = {this.state.data[i].address}
            notes = {this.state.data[i].notes}
            contact = {this.state.data[i].contact}
            time = {this.state.data[i].time}
            initials = {this.state.data[i].initials}
            confirmation = {this.state.data[i].confirmation}
            detailsClick = {this.detailsON.bind(this, i)}
            edit_time = {new Date()}
            open = {this.state.data[0].open}
            canceled = {this.state.data[i].canceled} />
          ],
          open: this.state.data[0].open,

          key: [...this.state.key,i]
        })
        console.log(i);
      } else {}
      this.setState({
        loaded: this.state.loaded + 1
      });
    }

  }

  onSubmitButton = (e) => {
    e.preventDefault();
    var delDate = (this.props.deliveryDate);
    $.ajax({
      url: 'http://localhost/insert.php', //*change localhost to your website address*
      method: 'POST',
      type: 'post',
      data: {
        delDatevar: delDate,
        customer_no: $(".input1").val(),
        estimate_no: $(".input2").val(),
        sales_order: $(".input3").val(),
        production: $(".input4").val(),
        amount_of_doors: $(".input5").val(),
        amount_of_trim: $(".input6").val(),
        address: $(".input21").val(),
        notes: $(".input22").val(),
        contact: $(".input23").val(),
        time: $(".input24").val(),
        initials: $(".input25").val(),
        confirmation: $(".input26").val(),
        created_by: this.props.cookies.username,
        edit_time: new Date(),
        edited_by: this.props.cookies.username,
        submit_time: new Date(),
        open: '1',
        canceled: false
      },
      success: function (output) {
        console.log(output);
      }

    });
    $(".input1").val('');
    $(".input2").val('');
    $(".input3").val('');
    $(".input4").val('');
    $(".input5").val('');
    $(".input6").val('');
    $(".input21").val('');
    $(".input22").val('');
    $(".input23").val('');
    $(".input24").val('');
    $(".input25").val('');
    $(".input26").val('');

  }

  onCloseButton = (e) => {
    e.preventDefault();

    var delDate = (this.props.deliveryDate);
    $.ajax({
      url: 'http://localhost/updateOpen.php',  //*change localhost to your website address*
      method: 'POST',
      type: 'post',
      data: {
        delDatevar: delDate,
        open: '0'
      },

      success: function (output) {
        console.log(output);

      }

    });
    this.setState({open: '0'});
  }

  checkIfClosed = () => {

    if (this.state.data.length > 0) {


      if (this.state.data[0].open === '1') {
        $('.new-delivery-container').css("background-color", "rgba(41, 162, 184, 0.164)");
        $('.new-delivery-title').text("Add new delivery");
      } else if (this.state.data[0].open === '0') {
        $('.new-delivery-container').css("background-color", "rgba(255, 0, 0, 0.164)");
        $('.new-delivery-title').text("Deliveries Closed");
      }
    }

  }

  onOpenButton = (e) => {

    e.preventDefault();
    var delDate = (this.props.deliveryDate);
    $.ajax({
      url: 'http://localhost/updateOpen.php',  //*change localhost to your website address*
      method: 'POST',
      type: 'post',
      data: {
        delDatevar: delDate,
        open: '1'
      },
      success: function (output) {
        console.log(output);

      }

    });
    this.setState({open: '1'});
  }

  render() {

    const cookies = new Cookies();
    cookies.set('deliveryTime', this.props.deliveryDate, {path: 'http://localhost/delivery/'});  //*change localhost to your website address*
    this.onSubmitButton = this
      .onSubmitButton
      .bind(this);
    this.newDelivery = this
      .newDelivery
      .bind(this);
    this.detailsON = this
      .detailsON
      .bind(this);
    this.onCloseButton = this
      .onCloseButton
      .bind(this);
    this.onOpenButton = this
      .onOpenButton
      .bind(this);

    if (this.state.data.length > 0 && this.state.detailsON !== true) {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row date-row col-md-12">
              <div className="delivery-date col-md-4" id="delivery-d">{this.props.deliveryDate}</div>
              <div className='col-md-4'></div>
              <div className='col-md-4'>
                <div className="back-to-calendar" onClick={this.props.back}>Back to Calendar</div>
              </div>
            </div>

            <SubmitNewDelivery
              submitButton={this.onSubmitButton}
              admin={this.props.cookies.admin}
              open={this.state.data[0].open}
              closeButton={this.onCloseButton}
              openButton={this.onOpenButton}/> {this.state.deliveries}

            {this.props.back}
          </div>
        </React.Fragment>
      )
    } else if (this.state.detailsON === true) {
      return (
        <React.Fragment>
          <Details
            customer_no={this.state.deliveryDetails.customer_no}
            estimate_no={this.state.deliveryDetails.estimate_no}
            sales_order={this.state.deliveryDetails.sales_order}
            production={this.state.deliveryDetails.production}
            amount_of_doors={this.state.deliveryDetails.amount_of_doors}
            amount_of_trim={this.state.deliveryDetails.amount_of_trim}
            address={this.state.deliveryDetails.address}
            notes={this.state.deliveryDetails.notes}
            contact={this.state.deliveryDetails.contact}
            time={this.state.deliveryDetails.time}
            initials={this.state.deliveryDetails.initials}
            confirmation={this.state.deliveryDetails.confirmation}
            submit_time={this.state.deliveryDetails.submit_time}
            back={this.detailsON}
            created_by={this.state.deliveryDetails.created_by}
            admin={this.state.deliveryDetails.admin}
            id={this.state.deliveryDetails.id}
            delDate={this.props.deliveryDate}
            edited_by={this.state.deliveryDetails.edited_by}
            edit_time={this.state.deliveryDetails.edit_time}
            username={this.props.cookies.username}/>
        </React.Fragment>

      )
    } else {
      return (
        <React.Fragment>

          <div className="container">

            <div className="row date-row col-md-12">
              <div className="delivery-date col-md-4" id="delivery-d">{this.props.deliveryDate}</div>
              <div className='col-md-4'></div>
              <div className='col-md-4'>
                <div className="back-to-calendar" onClick={this.props.back}>Back to Calendar</div>
              </div>
            </div>

            <SubmitNewDelivery
              submitButton={this.onSubmitButton}
              closeButton={this.onCloseButton}
              openButton={this.onOpenButton}/> {this.props.back}
          </div>
        </React.Fragment>
      );
    }

  }

}

export default Schedule;