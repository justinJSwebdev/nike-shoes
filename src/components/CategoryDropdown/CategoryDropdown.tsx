import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useClickOutSide from 'src/hooks/useClickOutSide'

export default function CategoryDropdown() {
  const { nodeRef, setShow, show } = useClickOutSide()
  const [value, setValue] = useState<string>('')
  const navigate = useNavigate()
  function handleClickOption(value: string, key: string) {
    setValue(value)
    setShow(false)
    navigate(`/products?sortBy=${key.toLowerCase()}`)
  }
  return (
    <div className='relative z-[25]' ref={nodeRef}>
      <div
        className='p-3 md:p-5 rounded-lg border border-gray100 bg-white flex items-center justify-between cursor-pointer min-w-[250px]'
        onClick={() => {
          setShow(!show)
        }}
        aria-hidden
      >
        <span className='font-semibold'>{value ? value : 'Lựa chọn theo nhu cầu'}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full z-10 shadow-md rounded-lg bg-white ${
          show ? '' : 'opacity-0 invisible'
        }`}
      >
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption(' Mới nhất', 'new')}
          aria-hidden
        >
          Latest products
        </div>
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption('Cũ nhất', 'old')}
          aria-hidden
        >
          Oldest products
        </div>
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption('Phổ biến nhất', 'popular')}
          aria-hidden
        >
          Most popular product
        </div>
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption('Giá thấp tới cao', 'lower')}
          aria-hidden
        >
          Sort by Price Higher
        </div>
        <div
          className='p-5 font-medium cursor-pointer hover:text-green-500'
          onClick={() => handleClickOption('  Giá cao tới thấp', 'higher')}
          aria-hidden
        >
          Sort by Price Lower
        </div>
      </div>
    </div>
  )
}
