import React, { useState, useRef } from 'react'
import Close from 'src/icons/Close'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import Button from 'src/components/Button/Button'
import Heart from 'src/icons/Heart'
import QuantityController from 'src/components/QuantityController'
export default function ProductDetail() {
  const [value, setValue] = useState<number>(1)
  const handleChangeValue = (value: number) => {
    setValue(value)
  }
  return (
    <>
      <section>
        <div className='container'>
          <div className='flex items-center justify-center mt-4'>
            <h2 className='text-center text-sm md:text-base'>
              <span className='text-md md:text-xl mx-2'>FREE SIZE CHANGE</span>At all stores, within 1 week
            </h2>
            <Close className='w-[26px] h-[26px] object-contain cursor-pointer ml-2'></Close>
          </div>
          <section className='section'>
            <div className='container'>
              <div className='w-full h-[200px] md:h-[458px]'>
                <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  spaceBetween={10}
                  pagination
                  navigation
                  breakpoints={{
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    }
                  }}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 20,
                    modifier: 2.5,
                    slideShadows: false
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className='w-full h-full'
                >
                  <SwiperSlide className='w-full h-full slide-product'>
                    <img src='../images/product-detail-1.png' className='w-full h-full object-contain cursor-pointer' />
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full slide-product'>
                    <img
                      src='../images/product-detail-2.png'
                      alt=''
                      className='w-full h-full object-contain select-text'
                    />
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full slide-product'>
                    <img
                      src='../images/product-detail-2.png'
                      alt=''
                      className='w-full h-full object-contain select-text'
                    />
                  </SwiperSlide>
                  <SwiperSlide className='w-full h-full slide-product '>
                    <img
                      src='../images/product-detail-2.png'
                      alt=''
                      className='w-full h-full object-contain select-text'
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 medium:gap-x-52 '>
                <div>
                  <h1 className='text-[20px] md:text-[38px] font-bold'>Air Jordan 1 Zoom Cmft</h1>
                  <div className='text-lg text-darkGrey my-2'>
                    Sold: <span className='font-semibold'>41 items</span>
                  </div>
                  <div className='flex items-center justify-between flex-wrap'>
                    <div className='gap-2 text-lg md:text-2xl font-medium text-red-600 '>
                      4,109,000₫ <span className='line-through text-darkGrey'>2,000,000đ</span>
                    </div>
                    <div className='font-semibold text-green-500'>Còn hàng</div>
                  </div>
                  <div className='w-full flex items-center flex-wrap gap-2 my-2'>
                    <div className='w-8 h-8 bg-red-600 rounded-full border-2 border-black'></div>
                    <div className='w-8 h-8 bg-red-600 rounded-full border-2 border-black'></div>
                    <div className='w-8 h-8 bg-red-600 rounded-full border-2 border-black'></div>
                    <div className='w-8 h-8 bg-red-600 rounded-full border-2 border-black'></div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between items-center font-medium text-md my-4'>
                    <div className='border-b border-darkGrey'>
                      <span className='text-red-600'>*</span>Size chart
                    </div>
                    <div className='border-b border-darkGrey'>Size guide</div>
                  </div>
                  <h3 className='font-bold text-xl'>Select size:</h3>
                  <div className='flex items-center gap-2 my-4'>
                    {Array(8)
                      .fill(0)
                      .map((item, index) => (
                        <div className='w-[45px] h-[30px] medium:w-[60px] medium:h-[60px] flex items-center justify-center bg-lightGrey/60 text-black cursor-pointer'>
                          {index + 1}
                        </div>
                      ))}
                  </div>
                  <div className='flex items-center gap-4'>
                    <h3 className='font-bold text-xl'>Quantity:</h3>
                    <QuantityController
                      value={value}
                      classNameWrapper='my-4'
                      onDecrease={handleChangeValue}
                      onType={handleChangeValue}
                      onIncrease={handleChangeValue}
                      max={90}
                    ></QuantityController>
                  </div>
                  <div className='flex items-center justify-between gap-4 my-4'>
                    <Button className='text-white bg-black'>Add to Bag</Button>
                    <Button className='text-darkGrey bg-white border border-darkGrey hover:border-red-500 hover:bg-red-500 hover:text-white'>
                      Favorite
                      <Heart className='mx-3'></Heart>
                    </Button>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 flex-wrap text-md md:text-xl  text-black24 text-center gap-8 font-semibold my-6'>
                <div className='border-b border-darkGrey cursor-pointer'>View Product Details</div>
                <div className='border-b border-darkGrey text-darkGrey opacity-50 cursor-pointer'>
                  View Product Details
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
