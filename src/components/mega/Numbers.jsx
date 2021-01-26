import React from 'react'

export default props => {
  return (
    <div>
        <div>
          <label htmlFor="Teste"></label>
          <input id="numbers" type="number"
            value ={ props.numbers }
          />
        </div>
    </div>
  )
}