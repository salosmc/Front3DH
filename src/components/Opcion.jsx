import React, {Component} from "react";

class Opcion extends Component{

    render(){
      return(
        <div className='opcion' >
          <button onClick = {()=>this.props.eleccion(this.props.value)}  className='botones'>{this.props.value.toUpperCase()}</button>
          <h2>{this.props.opcion}</h2>
        </div>
      );
    }
  }

export default Opcion;