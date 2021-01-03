import React from 'react'

export default function Aleatorio(props) {
  const {min, max} = props;
  
  const rand = Math.floor(Math.random() * (max - min)) + min
  return (
    <div>
      <p>{ rand } </p>
    </div>
  )
}