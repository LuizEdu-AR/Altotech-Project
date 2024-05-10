import React from 'react'

import Announce from '../components/Announce'
import OfficialRobe from '../components/OfficialRobe'
import News from '../components/News'
import MainImage from '../components/MainImage'
import MoreInfantil from '../components/MoreInfantil'
import OtherInfantil from '../components/OtherInfantil'

import './Masculine.css'

const Infantil = () => {
    return (
        <div>
            <MainImage />
            <MoreInfantil />
            <Announce />
            <OtherInfantil />
            <OfficialRobe />
            <News />
        </div>
    )
}

export default Infantil