import { Link } from 'react-router-dom'
import Eye from 'src/icons/Eye'
export default function Product() {
  return (
    <div className='flex flex-col items-center justify-center '>
      <Link
        to='/products'
        className='h-[360px] lg:h-[500px] flex justify-center items-center relative flex-shrink-0 group transition duration-300 rounded-lg'
      >
        <img
          src='../images/sanpham.png'
          alt='product'
          className='h-full object-cover group-hover:blur-sm transition duration-300 rounded-lg'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center transition duration-300 group-hover:bg-black/60 rounded-lg'>
          <Link
            to='/products/1'
            className='absolute items-center justify-center hidden w-12 h-12 text-white transition duration-300 bg-white rounded-full shadow-lg cursor-pointer group group-hover:flex'
          >
            <Eye className='w-5 h-5 transition duration-300 group-hover:text-black'></Eye>
            <span className='absolute z-10 p-2 text-xs text-white transition-opacity bg-black rounded-lg opacity-0 pointer-events-none -bottom-10 w-max group-hover:opacity-100 text-semibold after:absolute after:w-5 after:h-5 '>
              Xem chi tiết sản phẩm
            </span>
          </Link>
        </div>
      </Link>
      <div className='py-5 text-center'>
        <h3 className='mb-2 text-base font-semibold text-black24'>300.000đ</h3>
        <p className='text-base font-normal text-darkGrey'>Super Wthhite Performance</p>
      </div>
    </div>
  )
}
