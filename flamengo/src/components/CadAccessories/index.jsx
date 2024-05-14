import React from 'react'

import { Link } from 'react-router-dom'

const CadAccessories = () => {
  return (
    <div>
            <div className='cadshoes-main-container' style={{ border: 'none', marginBottom: '0' }}>
                <div className="log-container">
                    <h2>SEJA BEM-VINDO</h2>
                    <div className="cadshoes-form-container">
                        <div className="shoes-container">
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Cadastrar</h3>
                            <Link to="/deletar-produto" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Remover</h3></Link>
                            <Link to="/visualizar-produto" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Visualizar</h3></Link>
                        </div>
                        <div className="cadoptions-container">
                            <Link to="/cadastrar-roupas" style={{ color: '#000', textDecoration: 'none' }}><h3>Roupas</h3></Link>
                            <Link to="/cadastrar-calcados" style={{ color: '#000', textDecoration: 'none' }}><h3>Calçados</h3></Link>
                            <h3 style={{ borderBottom: '2px solid #000' }}>Acessórios</h3>
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
                                <select name="secao" className='select-cadshoes'>
                                    <option value="acessorios">Acessórios</option>
                                </select>
                            </label>
                            <label>
                                <span>Tipo</span>
                                <select name="tipo" className='select-cadshoes'>
                                    <option value="bola">Bola</option>
                                    <option value="chapeu">Chapéu</option>
                                    <option value="chaveiro">Chaveiro</option>
                                    <option value="copo">Copo</option>
                                    <option value="mochila">Mochila</option>
                                </select>
                            </label>
                            <label>
                                <span>Imagem (recomendado ser 200x200)</span>
                                <input type="file" name="imagem" required className='cadshoes-file'/>
                            </label>
                            <label>
                                <span>Confirmar senha</span>
                                <input type="password" name="password" required />
                            </label>
                            <label>
                                <input type="submit" value="CADASTRAR" className='cadshoes-submit' />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CadAccessories