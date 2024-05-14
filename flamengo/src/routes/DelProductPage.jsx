import React from 'react'

import DelProduct from '../components/DelProduct'

import { useEffect } from 'react'

const DelProductPage = () => {
  useEffect(() => {
    document.title = 'Exclusão de Produtos - Flamengo';
  }, []);
  return (
    <div>
      <DelProduct />
    </div>
  )
}

export default DelProductPage