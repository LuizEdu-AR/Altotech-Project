import React from 'react'

import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MantoThree from '../components/MantoThree'

import { useEffect } from 'react'

const MantoThreePage = () => {
  useEffect(() => {
    document.title = 'Manto Três - Flamengo';
  }, []);
  return (
    <div>
        <MantoThree />
        <OfficialRobe />
        <News />
    </div>
  )
}

export default MantoThreePage