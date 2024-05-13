import React from 'react'

import './styles.css'

import { MantoThreeMock } from './mocks'

const MantoThree = () => {
  return (
    <div className="mantothree-container">
      <h2 className="mantothree-h2">JOGO 3</h2>
      <div className="mantothree-main-container">
        {MantoThreeMock.map((item) => (
          <div key={item.id} className="mantothree-card">
            <div className="mantothreecard-img">
              <img src={item.url} alt={item.textAlt} />
            </div>
            <div className="mantothreecard-options">
              <p className="mantothreecard-text">{item.text}</p>
              <p className="mantothreecard-price">{item.price}</p>
              <button className="mantothreecard-submit">COMPRAR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MantoThree