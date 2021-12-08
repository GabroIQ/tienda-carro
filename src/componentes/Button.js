import { Component } from "react";


class Button extends Component{
    render(){
        return(
            <button className='btn' {...this.props}/> //Esto hace que pasa todas las propiedades que le pasemos al button por ejemplo en este caso nosotros asignmamos dos, el nombre (children) y el onclick
        )
    }
}


export default Button