import React from 'react'

import './style.css'

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ConfirmCpf = () => {
  return (
    <div className='confirmcpf-main-container'>
      <div className="confirmcpf-container">
        <div className="seta-container">
        <Link to="/usuario"><ArrowBackIcon style={{color: '#000', height: '40px', width: '40px'}}/></Link>
        </div>
        <div className="confirm-container">
          <h3>Esqueci minha senha</h3>
          <h2>Confirme seu CPF para continuar</h2>
        </div>
        <form className="confirmcpf-form">
          <label className='confirmcpf-label'>
            <span className='confirmcpf-span'>CPF</span>
            <input type="text" name='cpf' style={{border: 'none', borderBottom: '1px solid #D2232A'}}/>
          </label>
          <Link to="/codigo"><input type="submit" value="Enviar" className='confirmcpf-submit' /></Link>
        </form>
      </div>
    </div>
  )
}

export default ConfirmCpf