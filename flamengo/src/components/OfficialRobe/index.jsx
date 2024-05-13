import './styles.css';


import Manto1 from '../../assets/img/manto1.png'
import Manto2 from '../../assets/img/manto2.png'
import Manto3 from '../../assets/img/manto3.png'

import {Link} from 'react-router-dom'

const OfficialRobe = () => {
  return (
    <div className='robe-container'>
      <h3>MANTOS OFICIAIS</h3>
      <div className="robe-images">
        <Link to="/manto-um"><img src={Manto1} alt="manto 1" /></Link>
        <Link to="/manto-dois"><img src={Manto2} alt="manto 2" /></Link>
        <Link to="/manto-tres"><img src={Manto3} alt="manto 3" /></Link>
      </div>
    </div>
  )
}

export default OfficialRobe