/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import { menuOptions } from 'src/constants/menuOptions'
import { path } from 'src/constants/path'

export default function Footer() {
  return (
    <footer className='mt-auto py-[82px] bg-footer'>
      <div className='container'>
        <div className='flex flex-wrap items-start justify-between'>
          <div className='flex flex-col mb-4 w-full md:max-w-[258px] md:mb-0'>
            <Link to={path.home} className='flex items-center gap-x-3'>
              <h2 className='text-2xl font-semibold font-title '>NK</h2>
            </Link>
            <p className='mt-4 text-sm'>
              <span className='font-semibold'>Địa chỉ:</span> 246 Dương Bá Trạc, P.2, Q.8, TP.HCM
            </p>
            <p className='mt-4 text-sm font-semibold '>0936911140</p>
            <p className='mt-4 text-sm '>trankyhung225@gmail.com</p>
          </div>
          <div className='hidden flex-col items-start  max-w-[258px] md:flex'>
            <h3 className='text-xl font-semibold'>Danh Mục</h3>
            {menuOptions.map((option, index) => (
              <Link
                to={option.path}
                className='py-2 text-base font-normal transition duration-200 hover:text-black24 hover:font-medium'
                key={index}
              >
                {option.title}
              </Link>
            ))}
          </div>
          <div className='max-w-[586px]'>
            <h3 className='text-lg font-semibold md:text-4xl'>Theo dõi chúng tôi</h3>
            <p className='mt-4 text-sm md:text-base'>
              Nhập email của bạn dưới đây để là người đầu tiên biết về các bộ sưu tập mới và ra mắt sản phẩm.
            </p>
            <div className='flex items-center h-[48px] mt-11'>
              <input
                className='flex-1 h-full px-5 py-4 border-none outline-none focus:outline-none'
                type='text'
                placeholder='Nhập địa chỉ email'
              />
              <button className='h-full text-xs sm:text-base px-6 font-semibold text-white bg-black'>Theo dõi</button>
            </div>
          </div>
        </div>
        <div className='mt-2 text-mediumGrey'>© Nk's  2023</div>
      </div>
    </footer>
  )
}
