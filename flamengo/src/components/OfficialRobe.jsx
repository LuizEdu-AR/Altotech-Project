import './OfficialRobe.css'

import Manto1 from '../assets/manto1.png'
import Manto2 from '../assets/manto2.png'
import Manto3 from '../assets/manto3.png'

const OfficialRobe = () => {
  return (
    <div className='robe-container'>
        <h3>MANTOS OFICIAIS</h3>
        <div className="robe-images">
            <img src={Manto1} alt="Manto 1" />
            <img src={Manto2} alt="Manto 2" />
            <img src={Manto3} alt="Manto 3" />
        </div>
    </div>
  )
}

export default OfficialRobe