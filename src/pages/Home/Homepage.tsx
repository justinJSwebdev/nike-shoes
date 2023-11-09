import Button from 'src/components/Button/Button'
import Product from 'src/components/Product/Product'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import Option from 'src/components/Option/Option'
import { motion } from 'framer-motion'
// eslint-disable-next-line import/no-unresolved
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'swiper/css/scrollbar'
import Slider from 'src/components/Slider/Slider'
export default function Homepage() {
  return (
    <>
      <section className='section md:p-0 h-[390px] lg:h-[770px] bg-hero-pattern bg-cover bg-top  bg-no-repeat w-full relative pt-[72px] overflow-hidden'>
        <div className='absolute inset-0 w-full h-full bg-black/40'></div>
        <div className='container relative flex flex-col justify-end w-full h-full'>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.75 }}
            className='text-2xl text-white md:text-2xl lg:text-[44px] font-semibold mb-3'
          >
            RUN FOR THE HILLS
          </motion.h1>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
            className='mb-4 font-normal text-white md:text-sm lg:text-base max-w-[467px]'
          >
            It time to put on your running shoes and Run For The Hills Every minute counts.
          </motion.p>
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className=''
          >
            <Button type='button' className='max-w-[210px] mb-[50px] md:mb-[90px]'>
              Learn more
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Featured products */}
      <section className='section'>
        <div className='container'>
          <h2 className='section-heading'>Featured</h2>
          <div className='w-full h-[350px] md:h-[520px]'>
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
        </div>
      </section>
      {/* Featured Options */}
      <section className='section'>
        <div className='container'>
          <h2 className='section-heading'>Trending</h2>
          <div className='w-full h-[400px] md:h-[577px] grid grid-cols-1 md:grid-cols-10'>
            <div className='col-span-1 md:col-span-7'>
              <img src='./images/banner.jpg' alt='' className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col flex-wrap items-center justify-center col-span-1 md:flex-col md:px-5 md:col-span-3 md:items-start md:order-none'>
              <h2 className='text-[28px] md:text-[38px] font-bold max-w-full md:max-w-[400px] md:text-left text-center'>
                WALK CONFIDENTLY IN YOUR SHOES
              </h2>
              <p className='mb-4 text-black w-full md:max-w-[400px] md:text-left text-center'>
                Everywhere you want to go Explore every road
              </p>
              <div className='text-center md:text-left'>
                <button className='px-4 py-1 border w-max transition-all duration-300 hover:bg-black hover:text-white border-black rounded-[100px]'>
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h2 className='section-heading'>What's Hot</h2>
          <div className='w-full h-[380px] sm:h-[450px] md:h-[700px] relative'>
            <img src='./images/what-hot.jpg' alt='' className='object-cover w-full h-full' />
            <div className='absolute w-full p-8 bg-black/50 top-[50%] text-center -translate-y-1/2 text-white'>
              <h2 className='text-[28px] md:text-[38px] font-bold'>BOLD LIKE BEFORE, BUILT FOR THE NEXT</h2>
              <div className='max-w-[470px] mx-auto mb-2'>
                It's time to put on your running shoes and Run For The Hills Every minute counts.
              </div>
              <button className='px-4 py-1 bg-black24/60 text-white w-max transition-all duration-300   rounded-[100px]'>
                Shop now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h2 className='section-heading'>WHO ARE YOU SHOPPING FOR? </h2>
          <div className='w-full grid-rows-[repeat(3,260px)] sm:grid-rows-[350px] medium:grid-rows-[580px] grid  grid-cols-1 sm:grid-cols-3 gap-5'>
            <div className='relative w-full h-full'>
              <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black/20'>
                <h3 className='text-[28px] md:text-[38px] text-white font-bold'>Women</h3>
                <button className='px-4 py-1 text-xs md:text-base bg-white text-black hover:text-white hover:bg-black w-max transition-all duration-300  rounded-[100px]'>
                  Shop now
                </button>
              </div>
              <img src='./images/category1.png' alt='female' className='object-cover w-full h-full' />
            </div>
            <div className='relative w-full h-full'>
              <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black/20'>
                <h3 className='text-[28px] md:text-[38px] text-white font-bold'>Men</h3>
                <button className='px-4 py-1 text-xs md:text-base bg-white text-black hover:text-white hover:bg-black w-max transition-all duration-300  rounded-[100px]'>
                  Shop now
                </button>
              </div>
              <img src='./images/category2.png' alt='female' className='object-cover w-full h-full' />
            </div>
            <div className='relative w-full h-full'>
              <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black/20'>
                <h3 className='text-[28px] md:text-[38px] text-white font-bold'>Kids</h3>
                <button className='px-4 py-1 text-xs md:text-base bg-white text-black hover:text-white hover:bg-black w-max transition-all duration-300  rounded-[100px]'>
                  Shop now
                </button>
              </div>
              <img src='./images/category3.png' alt='female' className='object-cover w-full h-full' />
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <h2 className='section-heading'>Best of NK</h2>
        <div className='container'>
          <Swiper
            modules={[Navigation]}
            // autoplay={{
            //   delay: 3500,
            //   disableOnInteraction: false
            // }}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            breakpoints={{
              500: {
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
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Category */}
      {/* <section className='section'>
        <div className='container'>
          <h2 className='section-heading'>Giải Pháp</h2>
          <p className='section-desc'>Giúp cải thiện làn da của bạn một cách tự nhiên</p>
          <div className='grid md:grid-cols-2 grid-row-1 md:grid-rows-[400px] lg:grid-rows-[547px] gap-[15px] mt-[56px]'>
            <Option>Da lão hóa</Option>
            <div className='grid grid-rows-2 gap-5'>
              <div className='grid grid-cols-2 row-span-1 gap-6'>
                <Option image='./images/method-2.png' className='text-[16px] medium:text-[24px] lg:text-[28px]'>
                  Da lão hóa
                </Option>
                <Option image='./images/method-3.png' className='text-[16px] medium:text-[24px] lg:text-[28px] '>
                  Chăm sóc cá nhân
                </Option>
              </div>
              <Option image='./images/method-4.png'>Da nám</Option>
            </div>
          </div>
        </div>
      </section> */}
      {/* Supporting */}
      {/* News */}
      {/* Reviews */}
    </>
  )
}
