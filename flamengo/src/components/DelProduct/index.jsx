import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const DelProduct = () => {
  return (
    <div>
      <div className='delproduct-main-container' style={{ border: 'none', marginBottom: '0' }}>
                <div className="log-container">
                    <h2>SEJA BEM-VINDO</h2>
                    <div className="delproduct-form-container">
                        <div className="del-container">
                            <Link to="/cadastrar-roupas" style={{textDecoration:'none', color:'#d2232a'}}><h3>Cadastrar</h3></Link>
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Remover</h3>
                            <Link to="/visualizar-produto" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Visualizar</h3></Link>
                        </div>
                        <form>
                            <label>
                                <span>Nome do produto</span>
                                <input type="text" name='nome-do-produto' required />
                            </label>
                            <label>
                                <span>Email do funcionário</span>
                                <input type="text" name='preco' required />
                            </label>
                            <label>
                                <span>Senha do funcionário</span>
                                <input type="text" name="quantidade" required />
                            </label>
                            <label>
                                <span>Confirmar senha</span>
                                <input type="password" name="password" required />
                            </label>
                            <label>
                            <input type="submit" value="REMOVER" className='delproduct-submit' />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DelProduct