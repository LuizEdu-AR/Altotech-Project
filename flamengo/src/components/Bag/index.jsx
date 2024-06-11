import React from 'react'

import PrimeiroManto from '../../assets/img/mantojogo1.png'

import './styles.css'

const Bag = () => {
    document.title = 'Carrinho de Compras - Flamengo'
    return (
        <div className='bag-main-container'>
            <div className="bag-container">
                <div className="productbag-container">
                    <div className="productbag-img">
                        <img src={PrimeiroManto} alt="Primeiro Manto" />
                    </div>
                    <div className="productbag-info">
                        <h3>MANTO FLAMENGO JOGO 1 ADIDAS 2024</h3>
                        <p>R$ 349,99</p>
                    </div>
                </div>
                <div className="pricebag-container">
                    <div className="pricebag">
                        <div className="price-info">
                            <p>2 PRODUTOS</p>
                            <p>TAXA</p>
                            <p>TOTAL</p>
                        </div>
                        <div className="price">
                            <p>R$ 699,98</p>
                            <p>R$ 10,00</p>
                            <p>R$ 709,98</p>
                        </div>
                    </div>
                    <button className='price-button'>FINALIZAR A COMPRA</button>
                </div>
            </div>
        </div>
    )
}

export default Bag