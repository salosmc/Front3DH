import React, {Component} from "react";

class Historia extends Component{
  
  componentWillUnmount(){
    alert("Historia Finalizada!!!");
  }
  render(){
    return(
      <div className="historia" >
        <h1>{this.props.historia}</h1>
      </div>
    )
  }
}

export default Historia;