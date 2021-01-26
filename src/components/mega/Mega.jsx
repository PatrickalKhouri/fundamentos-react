import React, { useState } from 'react'

export default props => {

  function megaSena (numbers) {

    var times = numbers;
    
    const numberArray = [];
   
    
    for(var i=0; i < times; i++){
      var randomize = Math.floor(Math.random() * (59)) + 1;
  
      if(numberArray.includes(randomize)) {
       i--; 
      } else {
      numberArray.push(randomize);
    }
  }
    
  return numberArray.sort((n1, n2) => n1 - n2);
    
  };

  const [qtde, setQtde ] = useState(props.qtde || 6 )
  const numerosIniciais = Array(qtde).fill(0)
  const [numeros, setNumeros ] = useState(numerosIniciais)

  return (
    <div>
      <h2>Mega</h2>
      <h3>{ numeros.join(' ') }</h3>
      <div>
        <label htmlFor="">Qntde de Numeros</label>
        <input type="number" value={ qtde }
          onChange={e => setQtde(+e.target.value)}/>
      </div>
      <button onClick={_ => setNumeros(megaSena(props.qtde || 6 ))}>Gerar Numeros </button>
    </div>
  )
}