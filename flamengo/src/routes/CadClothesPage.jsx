import React from 'react'

import CadClothes from '../components/CadClothes'

import { useEffect } from 'react'

const CadClothesPage = () => {
  useEffect(() => {
    document.title = 'Cadastro de Roupas - Flamengo';
  }, []);
  return (
    <div>
        <CadClothes />
    </div>
  )
}

export default CadClothesPage