import React from 'react'

import Announce from '../components/Announce'
import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MainImage from '../components/MainImage'
import MoreAccessories from '../components/MoreAccessories'
import OtherAccessories from '../components/OtherAccessories'

import './Masculine.css'

const Accessories = () => {
  return (
    <div>
      <MainImage />
      <MoreAccessories />
      <Announce />
      <OtherAccessories />
      <OfficialRobe />
      <News />
    </div>
  )
}

export default Accessories