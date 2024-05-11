import React from 'react'

import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './styles.css'

const ChangePassword = () => {
  return (
    <div className='changepassword-main-container'>
      <div className="changepassword-container">
        <div className="seta-container">
          <Link to="/usuario"><ArrowBackIcon style={{ color: '#000', height: '40px', width: '40px' }} /></Link>
        </div>
        <div className="change-container">
          <h3>Esqueci minha senha</h3>
        </div>
        <form className="changepassword-form">
          <label className='changepassword-label'>
            <span className='changepassword-span'>Nova senha</span>
            <input type="text" name='cpf' style={{ border: 'none', borderBottom: '1px solid #D2232A' }} />
          </label>
          <label className='changepassword-label'>
            <span className='changepassword-span'>Confirmar nova senha</span>
            <input type="text" name='cpf' style={{ border: 'none', borderBottom: '1px solid #D2232A' }} />
          </label>
          <Link to="/alterar-senha"><input type="submit" value="Confirmar" className='changepassword-submit' /></Link>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword