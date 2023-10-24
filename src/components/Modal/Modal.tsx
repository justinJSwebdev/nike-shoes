/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import ReactDOM from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { menuOptions } from 'src/constants/menuOptions'
import { close } from 'src/contexts/MenuMobileContext'
import { UserIcon } from 'src/icons'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

export default function Modal() {
  const isOpen = useAppSelector((state) => state.counter.status)
  const dispatch = useAppDispatch()
  console.log(isOpen)
  console.log('re-render')
  const targetElement: HTMLElement | null = document.querySelector('body')
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/60  transition z-50 duration-300 ${
        isOpen ? 'visible' : 'invisible'
      }`}
      onClick={() => {
        dispatch(close())
      }}
    >
      <div
        className={`top-0 right-0 w-[75vw] bg-white p-5 text-black fixed h-full z-40  ease-in-out duration-300 ${
          isOpen ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-start w-full h-full'>
          <div className='w-full font-bold text-right bg-g'>X</div>
          <div className='flex items-center w-full gap-4 py-4 border-b-2'>
            <div className='w-[40px] h-[40px] border-2 border-darkGrey rounded-full flex-shrink-0 flex items-center justify-center'>
              <UserIcon className='text-darkGrey'></UserIcon>
            </div>
            <Link to='/' className='font-semibold'>
              Đăng nhập
            </Link>
          </div>

          {menuOptions.map((option, index) => (
            <NavLink
              to={option.path}
              className={({ isActive }) =>
                `${
                  isActive ? 'font-bold text-yellowLinear' : 'font-semibold'
                } text-base hover:text-yellowLinear px-3 py-2 transition duration-200 w-full`
              }
              key={index}
            >
              {option.title}
            </NavLink>
          ))}
        </div>
        <button
          onClick={() => dispatch(close())}
          className='px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Close
        </button>
      </div>
    </div>,
    targetElement as HTMLElement
  )
}
