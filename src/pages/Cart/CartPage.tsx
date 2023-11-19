import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import Product from 'src/components/Product/Product'
import QuantityController from 'src/components/QuantityController'
import CartBanner from 'src/icons/CartBanner'
import Close from 'src/icons/Close'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function CartPage() {
  return (
    <div>
      <section>
        <CartBanner className='w-full'></CartBanner>
        <div className='container'>
          <h2 className='text-[28px] font-bold md:text-[38px]'>YOUR BAG</h2>
          <p className='text-xs text-darkGray'>*FREE DELIVERY Applies to orders of 5.000.000₫ or more</p>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='text-base font-medium my-4'>
            Total (2 items): <span>8,218,000 đ</span>
          </div>
          <div className='grid grid-cols-1 medium:grid-cols-10 gap-10'>
            <div className='col-span-1 medium:col-span-6 sm:max-h-auto p-3 max-h'>
              {Array(3)
                .fill(0)
                .map((item, index) => (
                  <div className='flex items-start gap-4 sm:gap-7 py-5 border-b border-darkGrey'>
                    <Link to='/products/1' className='h-[150px] w-[150p] sm:h-[204px] sm:w-[204px] flex-shrink-0'>
                      <img src='../images/cart_item.png' alt='cart-item' className='w-full h-full object-cover' />
                    </Link>
                    <div className='flex-1'>
                      <div className='flex justify-between items-center'>
                        <h3 className='text-xl sm:text-2xl text-black font-semibold'>Air Jordan 1 Zoom Cmft</h3>
                        <Close className='cursor-pointer'></Close>
                      </div>
                      <p className='text-xl sm:text-2xl text-red-600 font-semibold my-2'>4,109,000₫</p>
                      <div className='text-base sm:text-lg font-medium'>
                        Color: <span className='font-semibold'>Black</span>
                      </div>
                      <div className='flex items-center gap-4 text-base sm:text-lg font-medium my-2'>
                        Size:<span className='font-bold'>32</span>
                      </div>
                      <QuantityController value={1} classNameWrapper='my-2'></QuantityController>
                    </div>
                  </div>
                ))}
            </div>
            <div className='col-span-1 medium:col-span-4'>
              <h2 className='font-medium text-lg'>YOUR BAG</h2>
              <div className='relative my-6'>
                <input
                  type='text'
                  placeholder='Discount Code'
                  className='px-3 bg-[#D9D9D9CC] outline-none border-none w-full rounded-md '
                />
                <div className='absolute right-[8px] cursor-pointer top-[50%] -translate-y-1/2 text-[40px] font-medium'>
                  +
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <h3 className='text-xl'>Total Product Value:</h3>
                <span className='text-lg'>8,218,000₫</span>
              </div>
              <div className='flex justify-between items-center pb-5 border-b border-darkGrey'>
                <h3 className='text-xl'>Total Delivery Fee:</h3>
                <span className='text-lg'>8,218,000₫</span>
              </div>
              <div className='flex justify-between items-center my-2'>
                <h3 className='text-xl'>Total:</h3>
                <span className='text-xl sm:text-2xl font-semibold text-red-600'>8,218,000₫</span>
              </div>
              <Button className='border-2 border-black24 text-lg sm:text-xl text-black24 hover:bg-black24 hover:text-white mt-3'>
                Checkout
              </Button>
              <div className='mt-4 text-darkGrey font-medium text-center'>
                <p>ACCEPTANCE PAYMENT METHOD:</p>
              </div>
              <img src='../images/payment.png' alt='' className='mx-auto' />
            </div>
          </div>
          <div className='mt-10'>
            <h2 className='section-heading'>Top Pick For You</h2>
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
                  slidesPerView: 4,
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
        </div>
      </section>
    </div>
  )
}
