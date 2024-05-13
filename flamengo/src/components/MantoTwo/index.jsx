import React from 'react'

import './styles.css'

import { MantoTwoMock } from './mocks'

const MantoTwo = () => {
  return (
    <div className="mantotwo-container">
      <h2 className="mantotwo-h2">JOGO 2</h2>
      <div className="mantotwo-main-container">
        {MantoTwoMock.map((item) => (
          <div key={item.id} className="mantotwo-card">
            <div className="mantotwocard-img">
              <img src={item.url} alt={item.textAlt} />
            </div>
            <div className="mantotwocard-options">
              <p className="mantotwocard-text">{item.text}</p>
              <p className="mantotwocard-price">{item.price}</p>
              <button className="mantotwocard-submit">COMPRAR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MantoTwo