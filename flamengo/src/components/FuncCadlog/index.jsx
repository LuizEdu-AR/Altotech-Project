import React from 'react'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import './CadLog.css'

import { funcArray } from '../../data/dataFunc.js'

const FuncCadlog = () => {

    const Login = (e) => {
        e.preventDefault()
        const email = document.querySelector('input[name="email"]').value
        const password = document.querySelector('input[name="password"]').value
        console.log(email)
        console.log(password)
    }

    const Cadastro = (e) => {
        e.preventDefault()

        const [funcionarios, setFuncionarios] = useState([])

        const nome = document.querySelector('input[name="nome"]').value
        const cpf = document.querySelector('input[name="cpf"]').value
        const email = document.querySelector('input[name="emailcad"]').value
        const password = document.querySelector('input[name="passwordcad"]').value
        const passwordConfirm = document.querySelector('input[name="confirm-password"]').value
        const birth = document.querySelector('input[name="data-nascimento"]').value
        const gender = document.querySelector('select[name="Gênero"]').value
        const dataFunc = {
            name: nome,
            cpf: cpf,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            birth: birth,
            gender: gender,
        }
        setFuncionarios([...funcionarios, dataFunc])
        console.log(funcionarios)
    }

    const ConfirmarSenha = () => {
        const password = document.querySelector('input[name="passwordcad"]').value
        const passwordConfirm = document.querySelector('input[name="confirm-password"]').value
        if (password !== passwordConfirm) {
            alert('As senhas não coincidem')
        }
    }

    const VerificarCpf = () => {
        const cpf = document.querySelector('input[name="cpf"]').value
        const cpfArray = funcArray.map((func) => func.cpf)
        if (cpfArray.includes(cpf)) {
            alert('CPF já cadastrado')
        }
    }

    const VerificarEmail = () => {
        const email = document.querySelector('input[name="emailcad"]').value
        const emailArray = funcArray.map((func) => func.email)
        if (emailArray.includes(email)) {
            alert('Email já cadastrado')
        }
    }
    return (
        <div>
            <div className='cadlog-main-container'>
                <div className="log-container">
                    <h2>INICIAR SESSÃO</h2>
                    <div className="cadlog-form-container">
                        <div className="headerform-container">
                            <Link to="/usuario" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Usuário</h3></Link>
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Funcionário</h3>
                        </div>
                        <form>
                            <label>
                                <span>Email</span>
                                <input type="emaillog" name="email" required />
                            </label>
                            <label>
                                <span>Senha</span>
                                <input type="password" name="password" required />
                            </label>
                            <label>
                                <Link to="/confirmar-cpf"><span className='misspass'>Esqueci a senha?</span></Link>
                                <input
                                    type="submit"
                                    value="ENTRAR"
                                    className='funccadlog-submit'
                                    onClick={Login}
                                />
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
                            <Link to="/usuario" style={{ color: '#d2232a', textDecoration: 'none' }}><h3>Usuário</h3></Link>
                            <h3 style={{ borderBottom: '2px solid #d2232a' }}>Funcionário</h3>
                        </div>
                        <form>
                            <label>
                                <span>Nome</span>
                                <input type="text" name='nome' required />
                            </label>
                            <label>
                                <span>CPF</span>
                                <input
                                    type="text"
                                    name='cpf'
                                    required
                                    onBlur={VerificarCpf}
                                />
                            </label>
                            <label>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="emailcad"
                                    required
                                    onBlur={VerificarEmail}
                                />
                            </label>
                            <label>
                                <span>Senha</span>
                                <input type="password" name="passwordcad" required />
                            </label>
                            <label>
                                <span>Confirmar senha</span>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    required
                                    onBlur={ConfirmarSenha}
                                />
                            </label>
                            <label>
                                <span>Data de Nascimento</span>
                                <input
                                    type="date"
                                    name="data-nascimento"
                                    id="data-nascimento"
                                    className='date-cadlog'
                                    required
                                />
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
                                <input
                                    type="submit"
                                    value="CADASTRAR"
                                    className='funccadlog-submit'
                                    onClick={Cadastro}
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FuncCadlog