import React from 'react'

import FuncCadlog from '../components/FuncCadlog'

import { useEffect } from 'react'

const FuncCadLogPage = () => {
  useEffect(() => {
    document.title = 'Cad / login de Funcionários - Flamengo';
  }, []);
  return (
    <div>
        <FuncCadlog />
    </div>
  )
}

export default FuncCadLogPage