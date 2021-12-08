import { Component } from "react";
import Button from "./Button";





class Articulo extends Component{
    render(){
        const {articulo , agregarAlCarro} = this.props

        return(
            <div className='articulo'>
                <img alt={articulo.name} src={articulo.img}/>
                <h3>{articulo.name}</h3>
                <p>{articulo.precio}</p>
                <Button onClick={()=> agregarAlCarro(articulo)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}



export default Articulo