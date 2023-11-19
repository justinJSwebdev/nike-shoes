import { Link } from 'react-router-dom'
import Cart from 'src/icons/Cart'
import Eye from 'src/icons/Eye'
import SaleMark from '../SaleMark/SaleMark'
import Heart from 'src/icons/Heart'
export default function Product({ className, saleDiscount }: { className?: string; saleDiscount?: string }) {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <Link
        to='/products/1'
        className='h-[180px] md:h-[240px] flex justify-center items-center relative flex-shrink-0 transition duration-300 rounded-3xl group'
      >
        <Heart className='absolute right-[8px] top-[8px]'></Heart>
        <div className='flex flex-col gap-2'>
          {/* <div className='hidden md:flex md:group-hover:visible md:invisible absolute bottom-[5px] left-[50%] rounded-full w-[40px] h-[40px] bg-white  shadow-2xl text-text z-20 cursor-pointer  items-center justify-center transition-all duration-150'>
            <Eye width={20} height={20} className='cursor-pointer'></Eye>
          </div>
          <div className='hidden md:flex absolute bottom-[5px] left-[35%] group-hover:visible invisible rounded-full w-[40px] h-[40px] bg-white  shadow-2xl text-black z-20 cursor-pointer items-center justify-center transition-all duration-150 ease-in'>
            <Cart width={25} height={25}></Cart>
          </div> */}
          {saleDiscount ? <SaleMark className='absolute top-0 left-0'></SaleMark> : ''}
        </div>
        <div className='absolute inset-0 transition-all duration-300 ease-linear'></div>
        <img src='../images/sanpham.png' alt='product' className='object-cover w-full h-full' />
      </Link>
      <div className='w-full py-5 text-left'>
        <h3 className='text-base font-normal text-darkGrey'>Super White Performance</h3>
        <p className='mb-2 text-base font-semibold text-black24'>300.000đ</p>
      </div>
    </div>
  )
}
