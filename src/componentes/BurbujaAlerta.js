import { Component } from "react";


class BurbujaAlerta extends Component{
    getNumber(n){
        if(!n) {return ' '}             //pregutnamos si existe un arguemnto cmo numero 'n' retiorbnado un string vacio si no existe
        return n > 9 ? '9+' : n         // si n es mayor a 9 devovlemos 9+ si no (: usamos los dos puntos xd) devovlemos n
    }


    render() {
        const {value} = this.props
        return (
            
            <span className='burbujaAlert'>{this.getNumber(value)}</span>
            
        )
    }
}

export default BurbujaAlerta