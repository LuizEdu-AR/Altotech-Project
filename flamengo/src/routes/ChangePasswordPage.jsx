import React from 'react'

import ChangePassword from '../components/ChangePassword'

import { useEffect } from 'react'

const ChangePasswordPage = () => {
  useEffect(() => {
    document.title = 'Alterar Senha - Flamengo';
  }, []);
  return (
    <div>
        <ChangePassword />
    </div>
  )
}

export default ChangePasswordPage