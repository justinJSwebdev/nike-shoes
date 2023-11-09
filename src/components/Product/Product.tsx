import { Link } from 'react-router-dom'
import Cart from 'src/icons/Cart'
import Eye from 'src/icons/Eye'
export default function Product() {
  return (
    <div className='relative flex flex-col'>
      <Link
        to='/products'
        className='h-[280px] sm:h-[320px] flex justify-center items-center relative flex-shrink-0 transition duration-300 rounded-3xl group'
      >
        <div className='flex flex-col gap-2'>
          <div className='hidden md:flex md:group-hover:visible md:invisible absolute bottom-[5px] left-[50%] rounded-full w-[40px] h-[40px] bg-white  shadow-2xl text-text z-20 cursor-pointer  items-center justify-center transition-all duration-150'>
            <Eye width={20} height={20} className='cursor-pointer'></Eye>
          </div>
          <div className='hidden md:flex absolute bottom-[5px] left-[35%] group-hover:visible invisible rounded-full w-[40px] h-[40px] bg-white  shadow-2xl text-black z-20 cursor-pointer items-center justify-center transition-all duration-150 ease-in'>
            <Cart width={25} height={25}></Cart>
          </div>
          <div className='absolute z-20 px-4 py-1 font-medium text-white bg-green-400 rounded-md top-2 left-2'>50%</div>
        </div>
        <div className='absolute inset-0 transition-all duration-300 ease-linear'></div>
        <img src='../images/sanpham.png' alt='product' className='object-cover w-full h-full' />
      </Link>
      <div className='w-full py-5 text-left'>
        <h3 className='text-base font-normal text-darkGrey'>Super Wthhite Performance</h3>
        <p className='mb-2 text-base font-semibold text-black24'>300.000đ</p>
      </div>
    </div>
  )
}
