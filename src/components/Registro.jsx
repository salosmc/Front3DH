import React, {Component} from "react";

class Registro extends Component{

    render(){
        return(
        <>  
            <h3>Selección anterior: {this.props.eleccion}</h3>
            <h4>Historial de opciones elegidas: </h4>
            <ul>
                {this.props.registro.map((val,index)=><li key={val+index}>{val}</li>)}
            </ul>
        </>
        )
    }
}

export default Registro;