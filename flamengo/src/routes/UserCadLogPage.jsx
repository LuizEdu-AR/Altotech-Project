import React from 'react'

import UserCadLog from '../components/UserCadlog'

import { useEffect } from 'react'

const UserCadLogPage = () => {
  useEffect(() => {
    document.title = 'Cadastro e Login - Flamengo';
  }, []);
  return (
    <div>
        <UserCadLog />
    </div>
  )
}

export default UserCadLogPage