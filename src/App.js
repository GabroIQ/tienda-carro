
import { Component } from 'react';
import './App.css';
import Articulos from './componentes/Articulos';
import Layout from './componentes/Layout';
import Navbar from './componentes/Navbar';
import Title from './componentes/Title';





class App extends Component {
  state = {
    articulos: [ 
      {name: 'Tomate', precio: 1500, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', precio: 2500, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', precio: 500, img: '/productos/lechuga.jpg'},
    ],
    carro:[],
    CarroVisible: false,
  }
agregarAlCarro= (articulo)=>{
  const {carro} = this.state
  if (carro.find(x => x.name === articulo.name)) {   //dentro de carro existe un elemneto q contga el mismo nomvre que le producto
    const newCarro = carro.map(x => x.name === articulo.name //find devuelve el priemr elemto con una condicion dada
      ? ({
        ...x,   // cremoas la copia del objeto
        cantidad: x.cantidad + 1, //y auemntamos la propiedad de la cantidad
      })
      : x // y si no hay coincidencia devuelve el prodcuto no rma
      )
      return this.setState({carro: newCarro})
  }
  return this.setState ({  //setState permite cambiar el valor 
    carro: this.state.carro.concat({  //concantemos el articulo con lo q ya se escuentre antes 
      ...articulo,
      cantidad: 1,
    })      
  })
}


MostrarCarro= ()=>{
  this.setState({CarroVisible: !this.state.CarroVisible})
}

  render(){
    const {CarroVisible} = this.state
    return(
      <div>
        <Navbar
          carro={this.state.carro}
          CarroVisible={CarroVisible}
          MostrarCarro = {this.MostrarCarro}
        />

        <Layout>
          <Title />
          <Articulos
            agregarAlCarro = {this.agregarAlCarro}
            articulos={this.state.articulos}      
          />
        </Layout>
      </div>
    )
  }
}










export default App;
