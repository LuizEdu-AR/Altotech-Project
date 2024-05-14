import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const ViewProduct = () => {
  return (
    <div>
        <div className='viewproduct-main-container' style={{ border: 'none', marginBottom: '0' }}>
                <div className="log-container">
                    <h2>SEJA BEM-VINDO</h2>
                    <div className="viewproduct-form-container">
                        <div className="view-container">
                            <Link to="/cadastrar-roupas" style={{textDecoration:'none', color:'#d2232a'}}><h3>Cadastrar</h3></Link>
                            <Link to="/deletar-produto" style={{textDecoration:'none', color:'#d2232a'}}><h3>Remover</h3></Link>
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Visualizar</h3>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewProduct