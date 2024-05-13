import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const CadProduct = () => {
  return (
    <div>
      <div className='cadproduct-main-container' style={{ border: 'none', marginBottom: '0' }}>
                <div className="log-container">
                    <h2>SEJA BEM-VINDO</h2>
                    <div className="cadproduct-form-container">
                        <div className="product-container">
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Cadastrar</h3>
                            <Link to="/deletar-produto" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Remover</h3></Link>
                            <Link to="/visualizar-produto" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Visualizar</h3></Link>
                        </div>
                        <form>
                            <label>
                                <span>Nome do produto</span>
                                <input type="text" name='nome-do-produto' required />
                            </label>
                            <label>
                                <span>Preço em R$</span>
                                <input type="text" name='preco' required />
                            </label>
                            <label>
                                <span>Quantidade em estoque</span>
                                <input type="text" name="quantidade" required />
                            </label>
                            <label>
                                <span>Seção</span>
                                <select name="secao" className='select-cadproduct'>
                                  <option value="masculino">Masculino</option>
                                  <option value="feminino">Feminino</option>
                                  <option value="infantil">Infantil</option>
                                  <option value="acessorio">Acessório</option>
                                </select>
                            </label>
                            <label>
                                <span>Tipo</span>
                                <select name="tipo" className='select-cadproduct'>
                                  <option value="camisa">Camisa</option>
                                  <option value="short">Short</option>
                                  <option value="body">Body</option>
                                  <option value="moletom">Moletom</option>
                                  <option value="bola">Bola</option>
                                  <option value="chaveiro">Chaveiro</option>
                                  <option value="copo">Copo</option>
                                  <option value="mamdeira">Mamadeira</option>
                                  <option value="mamdeira">Tênis</option>
                                  <option value="sandália">Sandália</option>
                                </select>
                            </label>
                            <label>
                                <span>Confirmar senha</span>
                                <input type="password" name="password" required />
                            </label>
                            <label>
                            <input type="submit" value="CADASTRAR" className='cadproduct-submit' />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CadProduct