import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const CadShoes = () => {
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
                            <h3 style={{ borderBottom: '2px solid #000' }}>Calçados</h3>
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
                                <select name="secao" className='select-cadshoes'>
                                    <option value="calcado">Calçados</option>
                                </select>
                            </label>
                            <label>
                                <span>Tipo</span>
                                <select name="tipo" className='select-cadshoes'>
                                    <option value="tenis-society">Tênis Society</option>
                                    <option value="tenis-futsal">Tênis Futsal</option>
                                    <option value="chuteira-futebol">Chuteira Futebol</option>
                                    <option value="havaiana">Havaiana</option>
                                </select>
                            </label>
                            <label>
                                <span>Tamanho</span>
                                <select name="tamanho" className='select-cadshoes'>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="45">45</option>
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

export default CadShoes