import React, { Component } from 'react';





 
class LoginPage extends Component {
  
  constructor(props) {
    
    super(props);
   
    this.state = {
      data: '',
      cookies: this.props.cookies
    }
    
   


    
    

    
    
  
  }
  



  render() {
    
    
    if(this.state.cookies.invalid === undefined){
      return (
       
        <div className="login-page animated fadeIn delay-1s">
        
          <form action = "http://localhost/login.php" method = "post" className="login-form"> {/*change localhost to your website address*/}
          <h3>Please Log in:</h3>
          <h6>Use 'demoadmin' to log in as admin</h6>
          <h6>or 'demouser' to log in as standard user</h6>
          <h6>Password: 'demo'</h6>
            <label>UserName  :</label><input type = "text" name = "username" className = "box"/><br /><br />
            <label>Password  :</label><input type = "password" name = "password" className = "box" /><br/><br />
            <input type = "submit" value = " Submit "/><br />
          
          </form>
 
        </div>
      )
    } else {
      return (
       
        <div className="login-page">
        {console.log(this.state.data)}
          <form action = "http://localhost" method = "post" className="login-form"> {/*change localhost to your website address*/}
            <label>UserName  :</label><input type = "text" name = "username" className = "box"/><br /><br />
            <label>Password  :</label><input type = "password" name = "password" className = "box" /><br/><br />
            <input type = "submit" value = " Submit "/><br />
            <div className="invalid-pass">{this.state.cookies.invalid.replace(/\+/g,' ')}</div>
          </form>
 
        </div>
      )
    }
      
   
    }
  
}

export default LoginPage;