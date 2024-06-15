import React from 'react'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import './CadLog.css'

import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const UserCadlog = () => {

    const [touched, setTouched] = useState(false)

    // código para o cadastro de usuário
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [genero, setGenero] = useState('')

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    const handleCpf = (e) => {
        setCpf(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleDataNascimento = (e) => {
        setDataNascimento(e.target.value)
    }

    const handleGenero = (e) => {
        setGenero(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('As senhas não coincidem')
            return
        }
        const user = {
            nome,
            cpf,
            email,
            password,
            dataNascimento,
            genero
        }

        console.log(user)
    }

    const confirmarArrobaEmail = (email) => {
        if (email.includes('@')) {
            return true;
        } else {
            return <span style={{marginTop: '5px', color:"orange", fontSize:'12px', display: 'flex', alignItems:'center'}}><ReportProblemIcon style={{fontSize:'16px'}}/>Digite um email válido<ReportProblemIcon style={{fontSize:'16px'}}/></span>
        }
    } 
    

    return (
        <div>
            <div className='cadlog-main-container'>
                <div className="log-container">
                    <div className="cadlog-form-container">
                        <h2>INICIAR SESSÃO</h2>
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
                    <div className="cadlog-form-container">
                        <h2>NÃO TEM UMA CONTA? CADASTRE-SE</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <span>Nome</span>
                                <input
                                    type="text"
                                    name='nome'
                                    required
                                    onChange={handleNome}
                                />
                            </label>
                            <label>
                                <span>CPF</span>
                                <input
                                    type="text"
                                    name='cpf'
                                    required
                                    onChange={handleCpf}
                                />
                            </label>
                            <label>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleEmail}
                                    onBlur={() => setTouched(true)}
                                />
                                {
                                    touched && confirmarArrobaEmail(email)
                                }
                            </label>
                            <label>
                                <span>Senha</span>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    onChange={handlePassword}
                                />
                            </label>
                            <label>
                                <span>Confirmar senha</span>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    onChange={handleConfirmPassword}
                                />
                                {
                                    password !== confirmPassword ? <span style={{marginTop: '5px',color:"orange", fontSize:'12px', display: 'flex', alignItems:'center'}}><ReportProblemIcon style={{fontSize:'16px'}}/>As senhas não coincidem<ReportProblemIcon style={{fontSize:'16px'}}/></span> : null
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
                                    onChange={handleDataNascimento}
                                />
                            </label>
                            <label>
                                <span>Gênero</span>
                                <select
                                    name="Gênero"
                                    className='select-cadlog'
                                    required
                                    onChange={handleGenero}
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
                                    className='submit-cadlog'
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCadlog