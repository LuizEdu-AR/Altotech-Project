import React from 'react'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import './CadLog.css'

import { funcArray } from '../../data/dataFunc'

const FuncCadlog = () => {

    const Login = (e) => {
        e.preventDefault()
        const email = document.querySelector('input[name="email"]').value
        const password = document.querySelector('input[name="password"]').value
        console.log(email)
        console.log(password)
    }


    const [funcionarios, setFuncionarios] = useState(funcArray)

    const saveFuncionarios = () => {
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [birth, setBirth] = useState('')
    const [gender, setGender] = useState('')

    const Cadastro = async (e) => {
        e.preventDefault()
        const newFuncionario = {
            name,
            cpf,
            email,
            password,
            passwordConfirm,
            birth,
            gender,
        }
        setFuncionarios([...funcionarios, newFuncionario])
        saveFuncionarios()
        console.log(funcionarios) 
    }

    const VerificarCpf = () => {
        const cpf = document.querySelector('input[name="cpf"]').value
        const cpfArray = funcArray.map((func) => func.cpf)
        if (cpfArray.includes(cpf)) {
            alert('CPF já cadastrado')
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
                                <input type="email" name="emaillog" required />
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
                        <form onSubmit={Cadastro}>
                            <label>
                                <span>Nome</span>
                                <input
                                    type="text"
                                    name='nome'
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name} 
                                />
                            </label>
                            <label>
                                <span>CPF</span>
                                <input
                                    type="text"
                                    name='cpf'
                                    required
                                    onBlur={VerificarCpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                    value={cpf}
                                />
                                {
                                    funcArray.map((func) => {
                                        if (func.cpf === cpf) {
                                            return <p>CPF já cadastrado</p>
                                        }
                                    })
                                }
                            </label>
                            <label>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="emailcad"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                {
                                    funcArray.map((func) => {
                                        if (func.email === email) {
                                            return <p>Email já cadastrado</p>
                                        }
                                    })
                                }
                            </label>
                            <label>
                                <span>Senha</span>
                                <input
                                    type="password"
                                    name="passwordcad"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </label>
                            <label>
                                <span>Confirmar senha</span>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    required
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                    value={passwordConfirm}
                                />
                                {
                                    password !== passwordConfirm ? <p>As senhas não coincidem</p> : null
                                }
                            </label>
                            <label>
                                <span>Data de Nascimento</span>
                                <input
                                    type="date"
                                    name="data-nascimento"
                                    id="data-nascimento"
                                    className='date-cadlog'
                                    required
                                    onChange={(e) => setBirth(e.target.value)}
                                    value={birth}
                                />
                            </label>
                            <label>
                                <span>Gênero</span>
                                <select
                                    name="genero"
                                    className='select-cadlog'
                                    required
                                    onChange={(e) => setGender(e.target.value)}
                                    value={gender}
                                >
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