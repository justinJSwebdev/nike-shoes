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
    <div className='relative' ref={nodeRef}>
      <div
        className='p-5 rounded-lg border border-gray100 bg-white flex items-center justify-between cursor-pointer min-w-[250px]'
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
          className='p-5 hover:text-green-500 cursor-pointer font-medium'
          onClick={() => handleClickOption(' Mới nhất', 'new')}
          aria-hidden
        >
          Mới nhất
        </div>
        <div
          className='p-5 hover:text-green-500 cursor-pointer font-medium'
          onClick={() => handleClickOption('Cũ nhất', 'old')}
          aria-hidden
        >
          Cũ nhất
        </div>
        <div
          className='p-5 hover:text-green-500 cursor-pointer font-medium'
          onClick={() => handleClickOption('Phổ biến nhất', 'popular')}
          aria-hidden
        >
          Phổ biến nhất
        </div>
        <div
          className='p-5 hover:text-green-500 cursor-pointer font-medium'
          onClick={() => handleClickOption('Giá thấp tới cao', 'lower')}
          aria-hidden
        >
          Giá thấp tới cao
        </div>
        <div
          className='p-5 hover:text-green-500 cursor-pointer font-medium'
          onClick={() => handleClickOption('  Giá cao tới thấp', 'higher')}
          aria-hidden
        >
          Giá cao tới thấp
        </div>
      </div>
    </div>
  )
}