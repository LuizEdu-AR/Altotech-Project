import React from 'react'

import ConfirmCpf from '../components/ConfirmCpf'

import { useEffect } from 'react'

const ConfirmCpfPage = () => {
    document.title = 'Confirmar CPF - Flamengo';
  return (
    <div>
      <ConfirmCpf />
    </div>
  )
}

export default ConfirmCpfPage