import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Produtos from './components/repeticao/Produtos'
import ParOuImpar from './components/condicional/ParOuImpar'

import './App.css'

export default _ =>
    <div className="App">

      <h1> Fundamentos React</h1>
      <div className="Cards">
      <Card  titulo="Exercicio 8 - Renderização Condicional">
        <ParOuImpar numero={20}/>
      </Card>
      <Card  titulo="Exercicio 7 - Produtos">
        <Produtos />
      </Card>
        <Card titulo="Exericio 6 - Repetição">
          <ListaAlunos/>
        </Card>
        <Card titulo="Componente com Filhos" color="#331832">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Maria"/>
            <FamiliaMembro nome="Patrick"/>
          </Familia>
        </Card>
        <Card titulo="Sorteio da Mega" color="#331832">
          <Aleatorio max={61} min={1} />
          <Aleatorio max={61} min={1} /> 
          <Aleatorio max={61} min={1} /> 
          <Aleatorio max={61} min={1} /> 
          <Aleatorio max={61} min={1} />
          <Aleatorio max={61} min={1} />  
        </Card>
        <Card titulo="Exercicio 3" color="#1b5299">  
          <Fragmento />
        </Card>
        <Card titulo="Exercicio 2" color="#9fc2cc">  
          <ComParametro 
            titulo='Sub Componente'
            aluno="Pedro"
            nota={9.7} />
        </Card>
        <Card titulo="Exercicio 1" color="#f1ecce">  
          <Primeiro />  
        </Card>
      </div>
    </div>