import React from 'react'

import { Link } from 'react-router-dom'

import './CadLog.css'

const UserCadlog = () => {
    return (
        <div>
            <div className='cadlog-main-container'>
                <div className="log-container">
                    <h2>INICIAR SESSÃO</h2>
                    <div className="cadlog-form-container">
                        <div className="headerform-container">
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Usuário</h3>
                            <Link to="/funcionario" style={{ color: '#d2232a', textDecoration: 'none', }}><h3>Funcionário</h3></Link>
                        </div>
                        <form>
                            <label>
                                <span>Email</span>
                                <input type="email" name="email" required />
                            </label>
                            <label>
                                <span>Senha</span>
                                <input type="password" name="password" required />
                            </label>
                            <label>
                                <Link to="/confirmar-cpf"><span className='misspass'>Esqueci a senha?</span></Link>
                                <input type="submit" value="ENTRAR" className='submit-cadlog' />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <div className='cadlog-main-container' style={{ border: 'none', marginBottom: '0' }}>
                <div className="log-container">
                    <h2>NÃO TEM UMA CONTA? CADASTRE-SE</h2>
                    <div className="cadlog-form-container">
                        <div className="headerform-container">
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Usuário</h3>
                            <Link to="/funcionario" style={{ color: '#d2232a', textDecoration: 'none', }}><h3>Funcionário</h3></Link>
                        </div>
                        <form>
                            <label>
                                <span>Nome</span>
                                <input type="text" name='nome' required />
                            </label>
                            <label>
                                <span>CPF</span>
                                <input type="text" name='cpf' required />
                            </label>
                            <label>
                                <span>Email</span>
                                <input type="email" name="email" required />
                            </label>
                            <label>
                                <span>Senha</span>
                                <input type="password" name="password" required />
                            </label>
                            <label>
                                <span>Confirmar senha</span>
                                <input type="password" name="password" required />
                            </label>
                            <label>
                                <span>Data de Nascimento</span>
                                <input type="date" name="data-nascimento" id="data-nascimento" className='date-cadlog' />
                            </label>
                            <label>
                                <span>Gênero</span>
                                <select name="Gênero" className='select-cadlog'>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="não-informar">Não informar</option>
                                </select>
                            </label>
                            <label>
                                <input type="submit" value="CADASTRAR" className='submit-cadlog' />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCadlog