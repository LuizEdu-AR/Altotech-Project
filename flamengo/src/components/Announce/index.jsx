import './styles.css'

import { AnnounceMock } from './mocks'

const Announce = () => {
  return (
    <div className='announce-container'>
        {/* <img src={Product} alt="produtos" />
        <img src={Cashback} alt="cashback" /> */}
        {AnnounceMock.map((item)=>{
          return(
            <img key={item.id} src={item.url} alt={item.textAlt} />
          )
        })}
    </div>
  )
}

export default Announce