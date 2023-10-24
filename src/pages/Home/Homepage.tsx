import Button from 'src/components/Button/Button'
import Product from 'src/components/Product/Product'
import React from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import Option from 'src/components/Option/Option'
import { motion } from 'framer-motion'
export default function Homepage() {
  return (
    <>
      <section className='section py-5 md:p-0 h-[390px] lg:h-[770px]  bg-hero-pattern  bg-cover bg-left md:bg-center bg-no-repeat w-full'>
        <div className='container grid gap-x-[160px] items-center grid-cols-1 md:grid-cols-2 h-full'>
          <div className='w-full'>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ ease: 'easeOut', duration: 1 }}
              className='text-2xl font-slider text-yellowLinear md:text-2xl lg:text-[44px] font-semibold italic mb-3'
            >
              Mặt hàng thiết yếu
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 3 }}
              className='text-black24  text-2xl md:text-3xl md:leading-8 font-semibold lg:leading-[72px] mb-1 lg:text-[56px] md:mb-3 lg:mb-6 '
            >
              Cảm hứng làm đẹp từ cuộc sống
            </motion.h2>
            <p className='mb-8 font-normal text-darkGrey md:text-sm lg:text-base'>
              {' '}
              Được làm bằng nguyên liệu sạch, không độc hại, sản phẩm của chúng tôi là được thiết kế cho tất cả mọi
              người.
            </p>
            <Button type='button' className='max-w-[210px]'>
              Xem sản phẩm
            </Button>
          </div>
          <div className='hidden w-full md:block'>
            <img
              src='./images/product1.png'
              alt='product-slider'
              className='lg:h-[400px] xl:h-[506px] w-full object-cover'
            />
          </div>
        </div>
      </section>
      {/* Featured products */}
      <section className='section'>
        <div className='container'>
          <h2 className='section-heading'>Sản phẩm nổi bật</h2>
          <p className='section-desc'>Có được làn da bạn muốn cảm nhận</p>
          <Link
            to={path.products}
            className='block px-6 my-4 text-base font-semibold text-center transition duration-300 rounded-md text-darkGrey md:text-right hover:text-yellowLinear '
          >
            Xem tất cả
          </Link>
          <div className='grid mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5'>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
        </div>
      </section>
      {/* Featured Options */}
      <section className='section'>
        <div className='container'>
          <div className='hidden md:grid grid-cols-1 lg:grid-cols-3 gap-[52px]'>
            <div className='flex items-start gap-x-8'>
              <div className='w-[90px] h-[90px] flex-shrink-0'>
                <img src='./images/option1.png' alt='option' className='object-cover w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 className='mb-4 text-lg font-semibold lg:text-2xl'>Đảm bảo tinh khiết</h3>
                <p className='text-xs leading-6 lg:text-sm text-mediumGrey'>
                  Tất cả các công thức của Grace tuân thủ nghiêm ngặt tiêu chuẩn tinh khiết và sẽ không bao giờ chứa
                  thành phần khắc nghiệt hoặc độc hại
                </p>
              </div>
            </div>
            <div className='flex items-start gap-x-8'>
              <div className='w-[90px] h-[90px] flex-shrink-0'>
                <img src='./images/option2.png' alt='option' className='object-cover w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 className='mb-4 text-lg font-semibold lg:text-2xl'>Hoàn toàn miễn phí</h3>
                <p className='text-xs leading-6 lg:text-sm text-mediumGrey'>
                  Tất cả các công thức của Grace tuân thủ nghiêm ngặt tiêu chuẩn tinh khiết và sẽ không bao giờ chứa
                  thành phần khắc nghiệt hoặc độc hại
                </p>
              </div>
            </div>

            <div className='flex items-start gap-x-8'>
              <div className='w-[90px] h-[90px] flex-shrink-0'>
                <img src='./images/option3.png' alt='option' className='object-cover w-full h-full' />
              </div>
              <div className='flex-1'>
                <h3 className='mb-4 text-lg font-semibold lg:text-2xl'>Nguồn nhiên liệu sạch</h3>
                <p className='text-xs leading-6 lg:text-sm text-mediumGrey'>
                  Tất cả các công thức của Grace tuân thủ nghiêm ngặt tiêu chuẩn tinh khiết và sẽ không bao giờ chứa
                  thành phần khắc nghiệt hoặc độc hại
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category */}
      <section className='section'>
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
      </section>
      {/* Supporting */}
      {/* News */}
      {/* Reviews */}
    </>
  )
}
