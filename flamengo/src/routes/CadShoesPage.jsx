import React from 'react'

import CadShoes from '../components/CadShoes'

import { useEffect } from 'react'

const CadShoesPage = () => {
  useEffect(() => {
    document.title = 'Cadastro de Calçados - Flamengo';
  }, []);
  return (
    <div>
        <CadShoes />
    </div>
  )
}

export default CadShoesPage