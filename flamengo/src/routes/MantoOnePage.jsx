import React from 'react'

import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MantoOne from '../components/MantoOne'

const MantoOnePage = () => {
    document.title = 'Manto Um - Flamengo';
  return (
    <div>
        <MantoOne />
        <OfficialRobe />
        <News />
    </div>
  )
}

export default MantoOnePage