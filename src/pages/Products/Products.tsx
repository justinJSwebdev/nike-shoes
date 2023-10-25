import React, { useState } from 'react'
import Dropdown from 'src/components/CategoryDropdown/CategoryDropdown'
import Pagination from 'src/components/Pagination'
import Product from 'src/components/Product/Product'
import Radio from 'src/components/Radio/Radio'
import useQueryParams from 'src/hooks/useQueryParams'
import Filter from 'src/icons/Filter'

export default function Products() {
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const queryObj = useQueryParams()
  console.log(queryObj.sortBy)
  return (
    <section className='section mt-10'>
      <div className='container'>
        <h2 className='section-heading'>Sản phẩm</h2>
        {/* Filter */}
        <div className='flex items-center justify-between flex-wrap gap-3 mb-3'>
          <p className='text-base text-darkGrey font-medium'>Hiển thị 12/16 sản phẩm</p>
          {/* Dropdown */}
          <div className='flex items-center gap-3'>
            <Dropdown></Dropdown>
            <div
              className='bg-black24 text-white flex items-center justify-center cursor-pointer p-2 md:p-5 rounded-md md:rounded-lg md:text-base text-xs'
              onClick={() => setIsFilter((isFilter) => !isFilter)}
              aria-hidden
            >
              <Filter></Filter>Bộ lọc
            </div>
          </div>
        </div>
        {/* Filter table */}
        <div
          className={`transition-height duration-500 ease-in-out rounded-lg  shadow-xl shadow-slate-300 max-h-[400px] overflow-auto  ${
            isFilter ? 'h-[400px]' : 'h-0 '
          }`}
        >
          <div
            className={`transition-all duration-300 ease-linear  ${
              isFilter ? 'visible opacity-100' : 'invisible opacity-0 duration-100'
            } p-6 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4`}
          >
            <div className='w-full'>
              <h3 className='text-sm md:text-lg font-semibold'> Categories</h3>
              <ul className=' p-2'>
                <li className='flex items-center py-1'>
                  <Radio name='category'></Radio>
                  <div className='ml-3 capitalize text-darkGrey font-medium text-sm md:text-base'>accessories</div>
                </li>
                <li className='flex items-center py-1'>
                  <Radio name='category'></Radio>
                  <div className='ml-3 capitalize text-darkGrey font-medium text-sm md:text-base'>accessories</div>
                </li>
                <li className='flex items-center py-1'>
                  <Radio name='category'></Radio>
                  <div className='ml-3 capitalize text-darkGrey font-medium text-sm md:text-base'>accessories</div>
                </li>
                <li className='flex items-center py-1'>
                  <Radio name='category'></Radio>
                  <div className='ml-3 capitalize text-darkGrey font-medium text-sm md:text-base'>accessories</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product list */}
        <div className='grid mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
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
    </section>
  )
}
