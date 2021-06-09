import React, { Component } from 'react';
import './bootstrap.min.css';

class Buttons extends Component {
    constructor(props) {
        super(props);
       this.checkState = this.checkState.bind(this);
        this.state = {
            open: this.props.open
        };

        
        
      }
      componentDidUpdate(){
        this.checkState();
      }
      checkState(){
          if(this.state.open !== this.props.open){
              this.setState({open: this.props.open})
          }
      }
      

    render(){
        
        if(this.props.admin === '1' && this.state.open === '1'){
            return(
                <div className="row">
                    <div className="col-md-4"><button type="close" className="buttons btn btn-danger" onClick={this.props.close} >Close</button></div>
                    <div className="col-md-4"><button disabled type="open" className="buttons btn btn-success" onClick={this.props.submitButton} >Open</button></div>
                    <div className="col-md-4"><button type="submit" className="buttons btn btn-light" onClick={this.props.submit} >Submit</button></div>
                </div>
                
        )
        } else if(this.props.admin === '1' && this.state.open === '0'){
            return(
              <div className="row">
                    <div className="col-md-4"><button disabled type="close" className="buttons btn btn-danger" onClick={this.props.submitButton} >Close</button></div>
                    <div className="col-md-4"><button type="open" className="buttons btn btn-success" onClick={this.props.openButton} >Open</button></div>
                    <div className="col-md-4"><button disabled type="submit" className="buttons btn btn-light" onClick={this.props.submit} >Submit</button></div>
                </div>
            )
        } else if (this.props.admin === '0' && this.state.open === '0') {
            return(
                <div className="row">
                    <div className="col-md-4"><button disabled type="close" className="buttons btn btn-danger" onClick={this.props.submitButton} >Close</button></div>
                    <div className="col-md-4"><button disabled type="open" className="buttons btn btn-success" onClick={this.props.submitButton} >Open</button></div>
                    <div className="col-md-4"><button disabled type="submit" className="buttons btn btn-light" onClick={this.props.submit} >Submit</button></div>
                </div>
                
        )
        } else {
            return(
                <div className="row">
                    <div className="col-md-4"><button disabled type="close" className="buttons btn btn-danger" onClick={this.props.submitButton} >Close</button></div>
                    <div className="col-md-4"><button disabled type="open" className="buttons btn btn-success" onClick={this.props.submitButton} >Open</button></div>
                    <div className="col-md-4"><button type="submit" className="buttons btn btn-light" onClick={this.props.submit} >Submit</button></div>
                </div>
                
        )
        }
        
    }
}

export default Buttons;