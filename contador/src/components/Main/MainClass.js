import React, { Component } from 'react'
import ContadorClass from '../Contador/ContadorClass'
import TituloClass from '../Titulo/TituloClass'
import './Main.css'

export default class MainClass extends Component {

    constructor(props){
        super(props)

        this.state = {
            contador: 0
        }

        this.setContador = this.setContador.bind(this)
    }

    componentDidMount(){
        document.title = `Contador: ${this.state.contador}`
        console.log(this.state.contador)
    }

    componentDidUpdate(){
        document.title = `Contador: ${this.state.contador}`
        console.log(this.state.contador)
    }

    setContador(contador){
        this.setState({ contador: contador })
    }

  render() {
    return (
        <div className='main-container'>
            <TituloClass contador={this.state.contador} />
            <ContadorClass contador={this.state.contador} setContador={this.setContador} />
        </div>
    )
  }
}
