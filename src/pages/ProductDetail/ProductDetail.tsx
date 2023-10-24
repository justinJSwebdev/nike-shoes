import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Product from 'src/components/Product/Product'
import QuantityController from 'src/components/QuantityController'
import { path } from 'src/constants/path'
export default function ProductDetail() {
  const [quantity, setQuantity] = useState<number>(1)
  const [option, setOption] = useState<string>('detail')
  const handleChangeValue = (value: number) => {
    value && setQuantity(value)
  }
  const nodeRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={nodeRef}>
      <section className='mt-5 section'>
        <div className='container'>
          <div className='grid grid-cols-1 medium:grid-cols-[600px_1fr] md:grid-cols-2  gap-[15px] md:gap-[70px]'>
            <div className='w-full gap-3'>
              <img
                src='../images/product1.jpg'
                alt=''
                className='flex-shrink-0 w-full max-h-[530px] md:max-h-[700px] sm:h-auto md:h-[520px] medium:h-[700px] md:w-[450px] medium:w-full object-fill border cursor-pointer rounded-lg'
              />
              <div className='w-full grid-cols-[repeat(5,70px)] medium:grid-cols-[repeat(5,140px)] hidden gap-2 mt-2 md:grid'>
                <img
                  src='../images/product-detail.png'
                  alt='sub-product'
                  className='w-full h-full md:h-[70px] medium:h-[130px] object-cover border border-darkGrey shadow-xl cursor-pointer'
                />
                <img
                  src='../images/product-detail.png'
                  alt='sub-product'
                  className='w-full h-full md:h-[70px] medium:h-[130px] object-cover border border-darkGrey shadow-xl cursor-pointer'
                />
              </div>
            </div>
            <div className='w-full'>
              <h2 className='medium:text-[32px] text-[26px] mb-5 font-semibold text-black24 medium:mb-8'>
                Enriched Hand & Body Wash
              </h2>
              <p className='text-3xl font-semibold text-darkGrey'>
                <span className='text-lg text-red-600 line-through medium:text-2xl'>300.000đ</span> 300.000đ
                <span className='p-2 ml-4 text-white bg-green-500 text-xs medium:text-[18px]'>{10 + '% giảm'}</span>
              </p>

              <p className='mt-4 text-base font-medium text-mediumGrey'>Đây là sản phẩm rửa mặt</p>
              <span className='block mb-3 text-base font-semibold text-black mt-7'>Số lượng</span>
              <div className='flex items-center gap-4'>
                <QuantityController
                  max={999}
                  value={quantity}
                  onDecrease={handleChangeValue}
                  onType={handleChangeValue}
                  onIncrease={handleChangeValue}
                ></QuantityController>
                <span className='text-base font-semibold text-darkGrey'>{3} đã bán</span>
              </div>

              <div className='flex items-center gap-4 mb-3'>
                <span className='text-base font-semibold text-black mt-7'>{3} sản phẩm có sẵn</span>
              </div>

              <Button type='button' className='max-w-full md:max-w-[500px] mt-5'>
                Thêm vào Giỏ Hàng
              </Button>
              <div className='mt-6'>
                <div className='flex items-center gap-5 mb-1'>
                  <p className='min-w-[70px] text-sm font-semibold'>Ký hiệu:</p>{' '}
                  <p className='flex-1'>woo-long-sleeve-tee</p>
                </div>
                <div className='flex items-center gap-5 mb-1'>
                  <p className='min-w-[70px] text-sm font-semibold'>Loại:</p> <p className='flex-1'>Bodycare</p>
                </div>
                <div className='flex items-center gap-5 mb-1'>
                  <p className='min-w-[70px] text-sm font-semibold'>Tags:</p>{' '}
                  <p className='flex-1'>Healthy, Shampoo, Skin Care</p>
                </div>
                <div className='flex items-center gap-5 mb-1'>
                  <p className='min-w-[70px] text-sm font-semibold'>Chia sẻ:</p>{' '}
                  <p className='flex items-center flex-1 gap-5'>
                    <Link to='/'>
                      <svg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M7.2085 8.79501H5.15771V14.92H2.42334V8.79501H0.181152V6.27939H2.42334V4.33798C2.42334 2.15048 3.73584 0.920013 5.73193 0.920013C6.68896 0.920013 7.70068 1.11142 7.70068 1.11142V3.27158H6.57959C5.48584 3.27158 5.15771 3.92783 5.15771 4.63876V6.27939H7.59131L7.2085 8.79501Z'
                          fill='#7E7E7E'
                        />
                      </svg>
                    </Link>
                    <Link to='/'>
                      <svg width='15' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M12.8804 3.07626C12.8804 3.21298 12.8804 3.32236 12.8804 3.45908C12.8804 7.25986 10.0093 11.6075 4.73193 11.6075C3.09131 11.6075 1.5874 11.1427 0.32959 10.3224C0.54834 10.3497 0.76709 10.377 1.01318 10.377C2.35303 10.377 3.5835 9.9122 4.56787 9.14658C3.31006 9.11923 2.24365 8.29892 1.88818 7.15048C2.07959 7.17783 2.24365 7.20517 2.43506 7.20517C2.68115 7.20517 2.95459 7.15048 3.17334 7.09579C1.86084 6.82236 0.876465 5.67392 0.876465 4.27939V4.25204C1.25928 4.47079 1.72412 4.58017 2.18896 4.60751C1.396 4.08798 0.903809 3.21298 0.903809 2.22861C0.903809 1.68173 1.04053 1.18954 1.28662 0.779388C2.7085 2.50204 4.84131 3.65048 7.22021 3.7872C7.16553 3.56845 7.13818 3.3497 7.13818 3.13095C7.13818 1.54501 8.42334 0.259857 10.0093 0.259857C10.8296 0.259857 11.5679 0.587982 12.1147 1.1622C12.7437 1.02548 13.3726 0.779388 13.9194 0.451263C13.7007 1.13486 13.2632 1.68173 12.6616 2.0372C13.2358 1.98251 13.8101 1.81845 14.3022 1.5997C13.9194 2.17392 13.4272 2.66611 12.8804 3.07626Z'
                          fill='#7E7E7E'
                        />
                      </svg>
                    </Link>
                    <Link to='/'>
                      <svg width='13' height='14' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M3.06396 13.17H0.520996V4.99423H3.06396V13.17ZM1.77881 3.90048C0.98584 3.90048 0.32959 3.21689 0.32959 2.39658C0.32959 1.60361 0.98584 0.947357 1.77881 0.947357C2.59912 0.947357 3.25537 1.60361 3.25537 2.39658C3.25537 3.21689 2.59912 3.90048 1.77881 3.90048ZM12.5522 13.17H10.0366V9.20517C10.0366 8.24814 10.0093 7.04501 8.69678 7.04501C7.38428 7.04501 7.19287 8.05673 7.19287 9.12314V13.17H4.6499V4.99423H7.0835V6.11533H7.11084C7.46631 5.48642 8.28662 4.80283 9.51709 4.80283C12.0874 4.80283 12.5796 6.49814 12.5796 8.68564V13.17H12.5522Z'
                          fill='#7E7E7E'
                        />
                      </svg>
                    </Link>
                    <Link to='/'>
                      <svg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M9.02881 14.0724C8.67334 14.4552 7.66162 14.92 6.37646 14.92C3.06787 14.92 2.35693 12.5138 2.35693 11.0919V7.15439H1.04443C0.907715 7.15439 0.770996 7.01767 0.770996 6.88095V5.02158C0.770996 4.83017 0.907715 4.63876 1.09912 4.58408C2.79443 3.98251 3.31396 2.50595 3.396 1.38486C3.42334 1.08408 3.5874 0.920013 3.8335 0.920013H5.7749C5.93896 0.920013 6.04834 1.05673 6.04834 1.19345V4.36533H8.31787C8.48193 4.36533 8.59131 4.4747 8.59131 4.63876V6.85361C8.59131 7.01767 8.48193 7.12704 8.31787 7.12704H6.04834V10.7638C6.04834 11.7208 6.67725 12.2403 7.90771 11.7481C8.01709 11.6935 8.15381 11.6661 8.23584 11.6935C8.34521 11.7208 8.3999 11.7755 8.45459 11.9122L9.05615 13.6622C9.11084 13.7989 9.13818 13.963 9.02881 14.0724Z'
                          fill='#7E7E7E'
                        />
                      </svg>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='flex items-center w-full text-lg font-semibold md:text-2xl justify-evenly '>
            <button
              className={`${option === 'detail' ? `text-black24` : `text-lightGrey`} `}
              onClick={() => setOption('detail')}
            >
              Thông tin chi tiết
            </button>
            <button
              className={`${option === 'review' ? `text-black24` : `text-lightGrey`}`}
              onClick={() => setOption('review')}
            >
              Đánh giá (1)
            </button>
          </div>
          {option === 'detail' && (
            <div className='py-2 px-3 mt-5 text-xs md:py-[20px] md:text-base md:px-[30px] lg:py-[62px] lg:px-[101px] rounded-lg border md:mt-[50px] lg:mt-[72px] font-medium'>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Doneceu libero sit amet quam egestas
              semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </div>
          )}
          {option === 'review' && <div>Product Review</div>}
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h2 className='section-heading'>Sản phẩm tương tự</h2>
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
    </div>
  )
}
