import React from 'react'

import Announce from '../components/Announce'
import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MainImage from '../components/MainImage'
import MoreShoes from '../components/MoreShoes'
import OtherShoes from '../components/OtherShoes'

import './Masculine.css'

const Shoes = () => {
    return (
        <div>
            <MainImage />
            <MoreShoes />
            <Announce />
            <OtherShoes />
            <OfficialRobe />
            <News />
        </div>
    )
}

export default Shoes