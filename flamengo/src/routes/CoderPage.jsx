import React from 'react'

import Coder from '../components/Coder'

import { useEffect } from 'react'

const CoderPage = () => {
  useEffect(() => {
    document.title = 'Confirmar código - Flamengo';
  }, []);
  return (
    <div>
        <Coder />
    </div>
  )
}

export default CoderPage