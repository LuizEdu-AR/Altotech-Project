import React from 'react'

import { products } from '../../data/data'

import './styles.css'

const ProductCard = ({product}) => {
    return (
        <div>
            <div className="product-card">
                <img src={product.url} alt={product.textAlt} />
                <h3>{product.text}</h3>
                <p>{product.price}</p>
                <button>COMPRAR</button>
            </div>
        </div>
    )
}

export default ProductCard