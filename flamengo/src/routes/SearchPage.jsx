import React from 'react'

import Search from '../components/Search'

import { useEffect } from 'react'

const SearchPage = () => {
  useEffect(() => {
    document.title = 'Pesquisar - Flamengo';
  }, []);
  return (
    <div>
        <Search />
    </div>
  )
}

export default SearchPage