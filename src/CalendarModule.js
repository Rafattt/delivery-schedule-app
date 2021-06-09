import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Schedule from './Schedule.js';



 
class CalendarModule extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      date: new Date(),
      clickedValue: 0,
      cookies: this.props.cookies
    }
   
    this.displayDate = this.displayDate.bind(this);
    this.updateClickedValue = this.updateClickedValue.bind(this);
    this.deleteAllCookies = this.deleteAllCookies.bind(this);

    
      
      console.log(this.state.date)
      
    
  }

updateClickedValue = ()=> {
  if(this.state.clickedValue === 0){
    this.setState({
      clickedValue: 1,
    })
  } else {
    this.setState({
      clickedValue: 0
    })
  }
  }



displayDate =() =>{
    let dd = this.state.date;

    return (JSON.stringify(dd).slice(1,5)+'/'+JSON.stringify(dd).slice(6,8)+'/'+JSON.stringify(dd).slice(9,11));
    
  }

deleteAllCookies = () => {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++)
  {   
      var spcook =  cookies[i].split("=");
      deleteCookie(spcook[0]);
  }
  function deleteCookie(cookiename)
  {
      var d = new Date();
      d.setDate(d.getDate() - 1);
      var expires = ";expires="+d;
      var name=cookiename;
      //alert(name);
      var value="";
      document.cookie = name + "=" + value + expires + "; path=/";                    
  }
  window.location = ""; // TO REFRESH THE PAGE
}

 onChange = date => {this.setState({ date })
 
  this.updateClickedValue();
  
    

}
  

  
  render() {
    

    if(this.state.clickedValue === 0){
      
      return( 
        <React.Fragment>
        <div className="logged">You are logged as: <b>{this.state.cookies.username}</b><a href='http://rafalkmiecik.com/deliverybuild'><button className="logout" onClick={this.deleteAllCookies}>Log out</button></a></div>
      <Calendar
      onChange={this.onChange}
      value={this.state.date}
    />
    </React.Fragment>
    )
    } else  {
      return <Schedule 
            deliveryDate={(this.displayDate())}
            back={this.updateClickedValue}
            cookies={this.state.cookies}
          />
        
    }
  }
}

export default CalendarModule;