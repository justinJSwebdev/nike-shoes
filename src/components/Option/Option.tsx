import React from 'react'

type Props = {
  textSize?: string
  image?: string
  children: React.ReactNode
  className?: string
}
export default function Option({ image = './images/method-1.png', children = 'Da mụn', className = '' }: Props) {
  return (
    <div className='relative group transition duration-300 rounded-xl'>
      <div className='absolute inset-0 bg-black/50 group-hover:bg-transparent transition duration-300 cursor-pointer rounded-lg'></div>
      <img src={image} alt='option' className='w-full h-full object-cover rounded-lg' />
      <div
        className={`absolute bg-black/20 rounded-lg px-3 py-2 lg:px-4 lg:py-3 text-white top-4 sm:top-10 left-2 lg:left-3 `}
      >
        <span className='text-xs sm:text-base'>Giải pháp</span>
        <h3 className={`font-title text-[20px] sm:text-[24px] lg:text-[30px] font-medium ${className}`}>{children}</h3>
      </div>
    </div>
  )
}
