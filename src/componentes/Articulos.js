import { Component } from "react";
import Articulo from "./Articulo";




class Articulos extends Component{
    render(){
        const { articulos , agregarAlCarro } = this.props


        return (
            <div className='articulos'>
                {articulos.map ( articulo => 
                   <Articulo 
                    agregarAlCarro = {agregarAlCarro}
                    key = {articulo.name}
                    articulo = {articulo}           
                   />)}
            </div>
        )
    }
}

export default Articulos