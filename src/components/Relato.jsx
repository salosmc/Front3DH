import React,{Component} from 'react';
import data from './data.json';
import Historia from './Historia';
import Opcion from './Opcion';
import Registro from './Registro';

let registro = [];

class Relato extends Component{
    constructor(props){
        super(props);
        this.state = {
            pos : 1,
            element : data[0],
            eleccion:'',
            isLive:true
        }
    }

    componentDidMount(){
        console.log("montando componente Relato");
    }

    componentDidUpdate(){
        console.log("actualizando componente Relato");
        registro = [...registro, this.state.eleccion];
    }

    elegir = (opc) =>{
        let e = data.find((e)=>e.id === this.state.pos+1+opc? e : null); 
        if (e){
        this.setState({
            element: e,
            pos:this.state.pos+1,
            eleccion : opc.toUpperCase()
            })
        }
        if(this.state.element.opciones.a === "FIN"){
            console.log("Final de la historia")
            this.setState({
                isLive: false 
            })
        }
    }

    render(){
        return(
        this.state.isLive
        ?
        <div className="layout">
            <Historia historia={this.state.element.historia} />
            <div className='opciones'>
                <Opcion eleccion = {this.elegir} value={'a'} opcion={this.state.element.opciones.a}/>
                <Opcion eleccion = {this.elegir} value={'b'} opcion={this.state.element.opciones.b}/>
            </div>
            <div className='recordatorio'>
                <Registro registro = {registro} eleccion = {this.state.eleccion}/>
            </div>
        </div>
        :
        <></>
        )
    }
}
  
export default Relato;