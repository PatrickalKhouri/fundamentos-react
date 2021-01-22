import './Contador.css';
import Display from './Display';
import React, { Component } from 'react';


 class Contador extends Component {

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5
  }



  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (e) => {
    this.setState({
      passo: +e.target.value,
    })
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero}></Display>
        <div>
          <label htmlFor=""></label>
          <input id="passoInput" type="number"
            value={ this.state.passo}
            onChange={this.setPasso} />
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
     </div>
   )
  }

}

export default Contador