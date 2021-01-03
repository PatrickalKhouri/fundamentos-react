import React from 'react' 
import produtos from '../../data/produtos'

export default props => {
  
  const tcontent = produtos.map((produto) => {

    return (
    <tr>
      <td>{ produto.id }</td>
      <td>{ produto.nome }</td>
      <td>{ produto.preço }</td>
    </tr>
    )
  }); 
  
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
        {tcontent}
      </table>
    </div>
  )
}