import React from 'react'

import CadAccessories from '../components/CadAccessories'

import { useEffect } from 'react'

const CadAccessoriesPage = () => {
  useEffect(() => {
    document.title = 'Cadastro de Acessórios - Flamengo';
  }, []);
  return (
    <div>
        <CadAccessories />
    </div>
  )
}

export default CadAccessoriesPage