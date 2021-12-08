import { Component } from "react";


class DetallesCarro extends Component{
    render() {
        const {carro} = this.props
        return (
             <div className='detalles-carro'>
                 <div>    
                     {carro.map(x => 
                     <div className='detalles-carro-info'>
                         <img src={x.img} alt={x.name} width='50' height='32'/>
                         {x.name} <span>{x.cantidad}</span>                       
                     </div>)}  
                </div>   
             </div>
        );
    }
}


export default DetallesCarro