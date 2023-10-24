import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Pagination from 'src/components/Pagination'
import Product from 'src/components/Product/Product'
import Filter from 'src/icons/Filter'

export default function Products() {
  return (
    <section className='section mt-10'>
      <div className='container'>
        <h2 className='section-heading'>Sản phẩm</h2>
        <div className='flex items-center justify-between flex-wrap gap-3'>
          <p className='text-base text-darkGrey font-medium'>Hiển thị 12/16 sản phẩm</p>
          {/* Dropdown */}
          <div className='flex items-center gap-3'>
            <select name='sort' id='' value={''} className='h-[48px]'>
              <option value=''>Lọc theo nhu cầu</option>
              <option value='newest'>Mới nhất</option>
              <option value='featured'>Nổi bật</option>
              <option value='higher'>Giá thấp đến cao</option>
              <option value='lower'>Giá cao đến thấp</option>
            </select>
            <div className='bg-black24 text-white h-[48px] px-[30px] flex items-center justify-center cursor-pointer'>
              <Filter></Filter>Bộ lọc
            </div>
          </div>
        </div>
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
