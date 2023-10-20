/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import { menuOptions } from 'src/constants/menuOptions'
import { path } from 'src/constants/path'

export default function Footer() {
  return (
    <footer className='mt-auto py-[82px] bg-footer'>
      <div className='container'>
        <div className='flex items-start justify-between flex-wrap'>
          <div className='flex flex-col max-w-[258px]'>
            <Link to={path.home} className='flex items-center gap-x-3'>
              <img src='./images/logo.png' alt='logo' className='w-[40px] h-[40px] object-cover flex-shrink-0' />
              <h2 className='font-title font-semibold text-2xl '>She's Cos</h2>
            </Link>
            <p className='text-sm mt-4'>
              <span className='font-semibold'>Địa chỉ:</span> 246 Dương Bá Trạc, P.2, Q.8, TP.HCM
            </p>
            <p className='text-sm mt-4 font-semibold '>+391 (0)35 2568 4593</p>
            <p className='text-sm mt-4 '>hello@shecos</p>
          </div>
          <div className='flex flex-col items-start  max-w-[258px]'>
            <h3 className='font-semibold text-xl'>Danh Mục</h3>
            {menuOptions.map((option, index) => (
              <Link
                to={option.path}
                className='font-normal
                text-base hover:text-yellowLinear py-2 transition duration-200'
                key={index}
              >
                {option.title}
              </Link>
            ))}
          </div>
          <div className='max-w-[586px]'>
            <h3 className='text-4xl font-semibold'>Theo dõi chúng tôi</h3>
            <p className='mt-4'>
              Nhập email của bạn dưới đây để là người đầu tiên biết về các bộ sưu tập mới và ra mắt sản phẩm.
            </p>
            <div className='flex items-center h-[48px] mt-11'>
              <input
                className='border-none outline-none py-4 px-5 flex-1 h-full focus:outline-none'
                type='text'
                placeholder='Nhập địa chỉ email'
              />
              <button className=' px-6 bg-yellowLinear text-white font-semibold h-full '>Theo dõi</button>
            </div>
          </div>
        </div>
        <div className='text-mediumGrey mt-2'>© She's cosmetic 2023</div>
      </div>
    </footer>
  )
}
