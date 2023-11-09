import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div className='w-full h-[350px] md:h-[480px]'>
      <Swiper
        modules={[Navigation]}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false
        // }}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          740: {
            slidesPerView: 2,
            spaceBetween: 20
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        className='relative w-full h-full'
      >
        <SwiperSlide>
          {' '}
          <Link to='w-full h-full'>
            <img src='./images/featured-1.png' alt='' className='object-cover w-full h-full' />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='w-full h-full'>
            <img src='./images/featured-2.png' alt='' className='object-cover w-full h-full' />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='w-full h-full'>
            <img src='./images/featured-3.png' alt='' className='object-cover w-full h-full' />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='w-full h-full'>
            <img src='./images/featured-3.png' alt='' className='object-cover w-full h-full' />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Slider
