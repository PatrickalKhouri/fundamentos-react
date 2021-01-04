import React from 'react'

export default props => {
  return (
    <div>
      <div>{props.texto}</div>
      <div>{props.int}</div>
      <div>{props.bool ? "Verdadeiro" : "Falso"}</div>  
    </div>
  )
}