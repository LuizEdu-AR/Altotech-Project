import React from 'react'

import Announce from '../components/Announce'
import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MainImage from '../components/MainImage'


const Masculine = () => {
  return (
    <div>
        <MainImage />
        <h1>Masculino</h1>
        <Announce />
        <OfficialRobe />
        <News />
    </div>
  )
}

export default Masculine