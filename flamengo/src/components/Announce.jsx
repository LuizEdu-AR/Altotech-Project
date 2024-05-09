import './Announce.css'

import Product from '../assets/product.png'
import Cashback from '../assets/cashback.png'

const Announce = () => {
  return (
    <div className='announce-container'>
        <img src={Product} alt="produtos" />
        <img src={Cashback} alt="cashback" />
    </div>
  )
}

export default Announce