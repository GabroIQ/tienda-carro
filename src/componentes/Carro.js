import { Component } from "react";
import BurbujaAlerta from "./BurbujaAlerta";
import Button from "./Button";
import DetallesCarro from "./DetallesCarro";


class Carro extends Component{
    render() {
        const {carro , MostrarCarro , CarroVisible} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)  //reduce itera en este casi 'caso' y le pasamos dos arguentos 'acc = acumulador' y 'el=elemento actual'
        return (
            <div className='burbuja'>
                <span>
                    {cantidad !== 0 ? <BurbujaAlerta value={cantidad}/> : null }                
                </span>
                <Button onClick={MostrarCarro} className='carro'>
                    Carrito
                </Button>
                {CarroVisible ? <DetallesCarro carro={carro}/> : null}
                
            </div>
        )
    }
}


export default Carro