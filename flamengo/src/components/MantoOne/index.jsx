import { MantoOneMock } from "./mocks"

import "./styles.css"

const MantoOne = () => {
  return (
    <div className="mantoone-container">
      <h2 className="mantoone-h2">JOGO 1</h2>
      <div className="mantoone-main-container">
        {MantoOneMock.map((item) => (
          <div key={item.id} className="mantoone-card">
            <div className="mantoonecard-img">
              <img src={item.url} alt={item.textAlt} />
            </div>
            <div className="mantoonecard-options">
              <p className="mantoonecard-text">{item.text}</p>
              <p className="mantoonecard-price">{item.price}</p>
              <button className="mantoonecard-submit">COMPRAR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MantoOne