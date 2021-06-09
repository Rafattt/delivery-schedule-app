import React, { Component } from 'react';
import './App.css';
import CalendarModule from './CalendarModule.js'
import LoginPage from './LoginPage.js';
import './ven/animate.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getCookies = this.getCookies.bind(this);
    this.state = {
      logged: 0,
    }



  }

  getCookies = () => {
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
  }


  render() {
    let myCookies = this.getCookies();

    if (myCookies.logged == '1') { 
      return (
        <React.Fragment>
          <div className="App">
            <CalendarModule
              cookies={myCookies}
            />

          </div>
        </React.Fragment>
      );
    } else {
      return (

        <LoginPage cookies={myCookies} />


      )
    }

  }
}



export default App;
