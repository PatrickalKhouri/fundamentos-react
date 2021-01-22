import React from 'react'

export default props => {
  return (
    <div>
        <div>
          <label htmlFor=""></label>
          <input id="passoInput" type="number"
            value={ props.passo}
            onChange={e => props.setPasso(+e.target.value)} />
        </div>
    </div>
  )
}