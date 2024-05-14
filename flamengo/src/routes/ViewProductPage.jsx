import React from 'react'

import ViewProduct from '../components/ViewProduct'

import { useEffect } from 'react'

const ViewProductPage = () => {
  useEffect(() => {
    document.title = 'Visualizar Produto - Flamengo';
  }, []);
  return (
    <div>
        <ViewProduct />
    </div>
  )
}

export default ViewProductPage