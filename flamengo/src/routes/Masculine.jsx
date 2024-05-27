import React from 'react'

import Announce from '../components/Announce'
import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MainImage from '../components/MainImage'
import MoreMasculine from '../components/MoreMasculine'
import OtherMasculine from '../components/OtherMasculine'

import './Masculine.css'

const Masculine = () => {
  document.title = 'Produtos Masculinos - Flamengo';
  return (
    <div>
      <MainImage />
      <MoreMasculine />
      <Announce />
      <OtherMasculine />
      <OfficialRobe />
      <News />
    </div>
  )
}

export default Masculine