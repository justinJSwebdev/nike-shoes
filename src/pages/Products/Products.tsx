import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Dropdown from 'src/components/CategoryDropdown/CategoryDropdown'
import Pagination from 'src/components/Pagination'
import Product from 'src/components/Product/Product'
import Filter from 'src/icons/Filter'
import RatingStars from './RatingStars'
import SaleMark from 'src/components/SaleMark/SaleMark'
import Checkbox from 'src/components/Checkbox/Checkbox'

export default function Products() {
  const [isFilter, setIsFilter] = useState<boolean>(false)
  return (
    <section className='mt-10 section'>
      <div className='container'>
        {/* Filter */}
        <div className='grid grid-cols-1 md:grid-cols-[250px_minmax(500px,_1fr)] gap-[20px]  medium:gap-[71px]'>
          <div className='flex-col hidden min-h-screen px-2 md:flex '>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Gender</h2>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                <Checkbox></Checkbox>
                Men
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                <Checkbox></Checkbox>
                Women
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                <Checkbox></Checkbox>
                Kids
              </div>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Size</h2>
              <div className='grid grid-cols-4 medium:grid-cols-5 gap-4 medium:gap-6 my-4'>
                {Array(20)
                  .fill(0)
                  .map((item, index) => (
                    <div className='font-medium text-center cursor-pointer'>{index + 1}</div>
                  ))}
              </div>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Colours</h2>
              <div className='grid grid-cols-4 medium:grid-cols-3 gap-4 medium:gap-6 my-4'>
                {Array(4)
                  .fill(0)
                  .map((item, index) => (
                    <div className='flex flex-col items-center justify-center'>
                      <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
                      <div className='text-center my-2'>Black</div>
                    </div>
                  ))}
              </div>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Sales</h2>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                <Checkbox></Checkbox>
                70%
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                <Checkbox></Checkbox>
                50%
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                <Checkbox></Checkbox>
                30%
              </div>
              <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                <Checkbox></Checkbox>
                20%
              </div>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Ratings</h2>
              <RatingStars queryConfig={{}}></RatingStars>
            </div>
            <div className='w-full my-2'>
              <h2 className='text-xl font-semibold'>Price Range</h2>
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
            <Button className='mt-5 font-medium hover:bg-black24/100 transition-all duration-300 bg-black24/90 text-white'>
              Apply
            </Button>
          </div>
          <div>
            <h2 className='section-heading text-center'>Products</h2>
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
                  <h2 className='text-xl font-semibold'>Gender</h2>
                  <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                    <Checkbox></Checkbox>
                    Men
                  </div>
                  <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                    <Checkbox></Checkbox>
                    Women
                  </div>
                  <div className='flex gap-2 w-full my-[10px] font-semibold text-darkGrey items-center'>
                    <Checkbox></Checkbox>
                    Kids
                  </div>
                </div>
                <div className='w-full my-2 col-span-2'>
                  <h2 className='text-xl font-semibold'>Colours</h2>
                  <div className='grid grid-cols-4 medium:grid-cols-3 gap-4 medium:gap-6 my-4'>
                    {Array(4)
                      .fill(0)
                      .map((item, index) => (
                        <div className='flex flex-col items-center justify-center'>
                          <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
                          <div className='text-center my-2'>Black</div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className='w-full my-2 col-span-2'>
                  <h2 className='text-xl font-semibold'>Size</h2>
                  <div className='grid grid-cols-4 medium:grid-cols-5 gap-4 medium:gap-6 my-4'>
                    {Array(20)
                      .fill(0)
                      .map((item, index) => (
                        <div className='font-medium text-center cursor-pointer'>{index + 1}</div>
                      ))}
                  </div>
                </div>

                <Button className='mt-2 font-medium hover:bg-black24/100 transition-all duration-300 bg-black24/90 text-white col-span-2'>
                  Apply
                </Button>
                <Button className='mt-2 font-medium bg-green-500 w-full col-span-2 text-md text-white'>
                  Xóa tất cả bộ lọc
                </Button>
              </div>
            </div>
            {/* Product list */}
            <div className='grid grid-cols-2 gap-5 mt-6 medium:grid-cols-3 justify-center'>
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
