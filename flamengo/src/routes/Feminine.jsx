import React from 'react'

import Announce from '../components/Announce'
import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MainImage from '../components/MainImage'
import MoreFeminine from '../components/MoreFeminine'
import OtherFeminine from '../components/OtherFeminine'

import { useEffect } from 'react'

import './Masculine.css'

const Feminine = () => {
  useEffect(() => {
    document.title = 'Produtos Femininos - Flamengo';
  }, []);
  return (
    <div>
      <MainImage />
      <MoreFeminine />
      <Announce />
      <OtherFeminine />
      <OfficialRobe />
      <News />
    </div>
  )
}

export default Feminine