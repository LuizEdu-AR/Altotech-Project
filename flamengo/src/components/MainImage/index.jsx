import { Images } from '../../assets/img'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// preciso que meu swiper passe os swiperslide atutomáticamente

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css'

const MainImage = () => {

    return (
        <div className="swiper-main-container">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-container'
            >
                <SwiperSlide>
                    <img src={Images.MainImage1} alt="MainImage1" className='mainimage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Images.MainImage2} alt="MainImage2" className='mainimage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Images.MainImage3} alt="MainImage3" className='mainimage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Images.MainImage4} alt="MainImage4" className='mainimage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Images.MainImage5} alt="MainImage5" className='mainimage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Images.MainImage6} alt="MainImage6" className='mainimage' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MainImage