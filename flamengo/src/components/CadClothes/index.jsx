import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const CadClothes = () => {
    return (
        <div>
            <div className='cadclothes-main-container' style={{ border: 'none', marginBottom: '0' }}>
                <div className="log-container">
                    <h2>SEJA BEM-VINDO</h2>
                    <div className="cadclothes-form-container">
                        <div className="clothes-container">
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Cadastrar</h3>
                            <Link to="/deletar-produto" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Remover</h3></Link>
                            <Link to="/visualizar-produto" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Visualizar</h3></Link>
                        </div>
                        <div className="cadoptions-container">
                            <h3 style={{ borderBottom: '2px solid #000' }}>Roupas</h3>
                            <Link to="/cadastrar-acessorios" style={{ color: '#000', textDecoration: 'none' }}><h3>Acessórios</h3></Link>
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
                                <select name="secao" className='select-cadclothes'>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                </select>
                            </label>
                            <label>
                                <span>Tipo</span>
                                <select name="tipo" className='select-cadclothes'>
                                    <option value="camisa">Camisa</option>
                                    <option value="short">Short</option>
                                    <option value="body">Body</option>
                                    <option value="moletom">Moletom</option>
                                </select>
                            </label>
                            <label>
                                <span>Tamanho</span>
                                <select name="tamanho" className='select-cadclothes'>
                                    <option value="PP">PP</option>
                                    <option value="P">P</option>
                                    <option value="M">M</option>
                                    <option value="G">G</option>
                                    <option value="XG">XG</option>
                                </select>
                            </label>
                            <label>
                                <span>Imagem (recomendado ser 200x200)</span>
                                <input type="file" name="imagem" required className='cadclothes-file'/>
                            </label>
                            <label>
                                <span>Confirmar senha</span>
                                <input type="password" name="password" required />
                            </label>
                            <label>
                                <input type="submit" value="CADASTRAR" className='cadclothes-submit' />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadClothes