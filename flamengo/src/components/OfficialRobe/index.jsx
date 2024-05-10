import './styles.css';

import { OfficialRobeMock } from './mocks'


const OfficialRobe = () => {
  return (
    <div className='robe-container'>
      <h3>MANTOS OFICIAIS</h3>
      <div className="robe-images">
        {OfficialRobeMock.map((item) => (
          <img key={item.id} src={item.url} alt={item.textAlt} />
        ))}
      </div>
    </div>
  )
}

export default OfficialRobe