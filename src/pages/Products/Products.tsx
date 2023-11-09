import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Dropdown from 'src/components/CategoryDropdown/CategoryDropdown'
import Pagination from 'src/components/Pagination'
import Product from 'src/components/Product/Product'
import Filter from 'src/icons/Filter'
import RatingStars from './RatingStars'

export default function Products() {
  const [isFilter, setIsFilter] = useState<boolean>(false)
  return (
    <section className='mt-10 section'>
      <div className='container'>
        <h2 className='section-heading'>Sản phẩm</h2>
        {/* Filter */}
        <div className='grid grid-cols-1 md:grid-cols-[250px_minmax(500px,_1fr)]'>
          <div className='flex-col hidden min-h-screen px-2 md:flex'>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Thể loại</h2>
              <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                Chăm sóc da mặt
              </Link>
              <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                Sức khỏe
              </Link>
              <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                Làm đẹp
              </Link>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Nhãn hàng</h2>
              <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                Chăm sóc da mặt
              </Link>
              <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                Sức khỏe
              </Link>
              <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                Làm đẹp
              </Link>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Đánh giá</h2>
              <RatingStars queryConfig={{}}></RatingStars>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Theo khoảng giá</h2>
              <div className='flex flex-col items-center justify-center'>
                <div className='my-2 font-semibold text-darkGrey'>20k VND</div>
                <input
                  type='range'
                  className='transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600'
                  id='customRange1'
                  min={100}
                  max={300}
                />
              </div>
            </div>
            <Button className='mt-5 font-medium !bg-green-500'>Xóa tất cả bộ lọc</Button>
          </div>
          <div>
            <div className='flex flex-wrap items-center justify-between gap-3 mb-3'>
              <p className='text-base font-medium text-darkGrey'>Hiển thị 12/16 sản phẩm</p>
              {/* Dropdown */}
              <div className='flex items-center gap-3'>
                <Dropdown></Dropdown>
                <div
                  className='flex items-center justify-center p-2 text-xs text-white rounded-md cursor-pointer bg-black24 md:p-5 md:rounded-lg md:text-base md:hidden'
                  onClick={() => setIsFilter((isFilter) => !isFilter)}
                  aria-hidden
                >
                  <Filter></Filter>
                  <div>Bộ lọc</div>
                </div>
              </div>
            </div>
            {/* Filter table */}
            <div
              className={`transition-height duration-500 ease-in-out rounded-lg shadow-xl shadow-slate-300 max-h-[400px] overflow-auto block md:none  ${
                isFilter ? 'h-[400px]' : 'h-0'
              }`}
            >
              <div
                className={`transition-all duration-300 ease-linear  ${
                  isFilter ? 'visible opacity-100' : 'invisible opacity-0 duration-100'
                } p-6 grid grid-cols-2 gap-3`}
              >
                <div className='w-full my-2'>
                  <h2 className='font-semibold text-md'>Thể loại</h2>
                  <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                    Chăm sóc da mặt
                  </Link>
                  <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                    Sức khỏe
                  </Link>
                  <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                    Làm đẹp
                  </Link>
                </div>
                <div className='w-full my-2'>
                  <h2 className='font-semibold text-md'>Nhãn hàng</h2>
                  <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                    Chăm sóc da mặt
                  </Link>
                  <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                    Sức khỏe
                  </Link>
                  <Link to='/' className='block w-full my-4 font-semibold text-darkGrey'>
                    Làm đẹp
                  </Link>
                </div>
                <div className='w-full col-span-2 my-2'>
                  <h2 className='font-semibold text-md'>Đánh giá</h2>
                  <RatingStars queryConfig={{}}></RatingStars>
                </div>
                <div className='w-full col-span-2 my-2'>
                  <h2 className='font-semibold text-center text-md'>Theo khoảng giá</h2>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='my-2 text-sm font-semibold text-darkGrey'>20k VND</div>
                    <input
                      type='range'
                      className='transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600'
                      id='customRange1'
                      min={100}
                      max={300}
                    />
                  </div>
                </div>
                <Button className='mt-5 font-medium !bg-green-500 w-full col-span-2 !text-md'>Xóa tất cả bộ lọc</Button>
              </div>
            </div>
            {/* Product list */}
            <div className='grid grid-cols-2 gap-5 mt-6 medium:grid-cols-3'>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
            </div>
            <Pagination pageSize={15}></Pagination>
          </div>
        </div>
      </div>
    </section>
  )
}
