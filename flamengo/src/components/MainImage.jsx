import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import MainImage1 from '../assets/mainimage1.png';
import MainImage2 from '../assets/mainimage2.png';
import MainImage3 from '../assets/mainimage3.png';
import MainImage4 from '../assets/mainimage4.png';
import MainImage5 from '../assets/mainimage5.png';
import MainImage6 from '../assets/mainimage6.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const MainImage = () => {

    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={MainImage1} alt="MainImage1" />
      </SwiperSlide>
        <SwiperSlide>
            <img src={MainImage2} alt="MainImage2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={MainImage3} alt="MainImage3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={MainImage4} alt="MainImage4" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={MainImage5} alt="MainImage5" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={MainImage6} alt="MainImage6" />
        </SwiperSlide>
    </Swiper>
    )
}

export default MainImage