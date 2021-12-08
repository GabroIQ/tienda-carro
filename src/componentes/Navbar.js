import { Component } from "react";
import Carro from "./Carro";
import Logo from "./Logo";


class Navbar extends Component{
    render() {
        const {carro , MostrarCarro , CarroVisible} =this.props
        return (
            <nav className='navbar'>
                <Logo/>
                <Carro 
                    carro={carro}
                    MostrarCarro={MostrarCarro}
                    CarroVisible={CarroVisible}
                    
                />
            </nav>

        )
    }
}


export default Navbar