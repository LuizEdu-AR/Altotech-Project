import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { MoreAccessoriesMock } from './mocks';

const MoreAccessories = () => {
  return (
    <div>
        <h2 className='h2-more' style={{marginBottom: '45px', marginTop: '45px'}}>MAIS VENDIDOS ACESSÓRIOS</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='swiper-container'
        style={{height: '415px', marginLeft: '45px'}}
      >
        {MoreAccessoriesMock.map((item)=>{
          return(
            <SwiperSlide key={item.id}>
              <div className="products-container">
                <img src={item.url} alt={item.textAlt} />
                <h3>{item.text}</h3>
                <p>{item.price}</p>
                <button>COMPRAR</button>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper> 
    </div>
  )
}

export default MoreAccessories