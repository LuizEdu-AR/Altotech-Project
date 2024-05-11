import React from 'react'

import './styles.css'

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Coder = () => {
    return (
        <div className='coder-main-container'>
            <div className="coder-container">
                <div className="seta-container">
                    <Link to="/confirmar-cpf"><ArrowBackIcon style={{ color: '#000', height: '40px', width: '40px' }} /></Link>
                </div>
                <div className="codigo-container">
                    <h3>Esqueci minha senha</h3>
                    <h2>Informe o código enviado para seu
                        email que foi cadastrado</h2>
                </div>
                <form className="coder-form">
                    <label className='coder-label'>
                        <span className='coder-span'>Código</span>
                        <input type="text" name='cpf' style={{ border: 'none', borderBottom: '1px solid #D2232A' }} />
                    </label>
                    <Link to="/alterar-senha"><input type="submit" value="Confirmar" className='coder-submit' /></Link>
                </form>
            </div>
        </div>
    )
}

export default Coder