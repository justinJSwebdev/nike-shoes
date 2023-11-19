import React from 'react'

export default function SaleMark({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className='w-[54px] h-[56px] relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 54 56'
          fill='none'
          className='w-full h-full object-contain'
        >
          <path d='M54 0H13.0345H0V56L27.931 39.5294L54 56V0Z' fill='#FF0000' />
        </svg>
        <div className='absolute left-[50%] top-[10px] -translate-x-1/2  text-white '>-30%</div>
      </div>
    </div>
  )
}
