import React from 'react'

import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MantoTwo from '../components/MantoTwo'

const MantoTwoPage = () => {
    document.title = 'Manto Dois - Flamengo';
  return (
    <div>
        <MantoTwo />
        <OfficialRobe />
        <News />
    </div>
  )
}

export default MantoTwoPage