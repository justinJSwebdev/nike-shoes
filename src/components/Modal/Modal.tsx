/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useContext } from 'react'
import ReactDOM from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { menuOptions } from 'src/constants/menuOptions'
import { close } from 'src/redux/features/MenuMobileContext'
import { UserIcon } from 'src/icons'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getUserFromLS } from 'src/utils/auth'
import { AppContext } from 'src/contexts/app.context'

export default function Modal() {
  const isOpen = useAppSelector((state) => state.modal.status)
  const dispatch = useAppDispatch()
  const nodeRef = useRef<HTMLDivElement>(null)
  const { profile } = useContext(AppContext)
  useEffect(() => {
    function handleClickOutPopover(this: Document, ev: MouseEvent) {
      if (nodeRef.current && !nodeRef.current.contains(ev.target as Node)) {
        dispatch(close())
      }
    }
    document.addEventListener('click', handleClickOutPopover)
    return () => {
      document.removeEventListener('click', handleClickOutPopover)
    }
  }, [dispatch])
  const targetElement: HTMLElement | null = document.querySelector('body')
  return ReactDOM.createPortal(
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/60  transition z-40 duration-300 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      ></div>
      <div
        className={`top-0 right-0 w-[75vw] bg-white p-5 text-black fixed h-full z-50  ease-in-out duration-300 ${
          isOpen ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-start w-full h-full' ref={nodeRef}>
          <div className='flex justify-end w-full'>
            <div
              className='font-bold cursor-pointer max-w-fit text-darkGrey'
              onClick={() => {
                console.log('click')
                dispatch(close())
              }}
            >
              X
            </div>
          </div>

          <div className='flex items-center w-full gap-4 py-4 border-b-2'>
            {profile && profile.name ? (
              <>
                <div className='w-[40px] h-[40px] border-2 border-darkGrey rounded-full flex-shrink-0 flex items-center justify-center'>
                  <img
                    src={profile.image || 'https://source.unsplash.com/random'}
                    alt='user'
                    className='object-cover w-full h-full rounded-full'
                  />
                </div>
                <Link to='/info' className='font-semibold'>
                  {profile.name}
                </Link>
              </>
            ) : (
              <>
                <div className='w-[40px] h-[40px] border-2 border-darkGrey rounded-full flex-shrink-0 flex items-center justify-center'>
                  <UserIcon className='text-darkGrey'></UserIcon>
                </div>
                <Link to='/' className='font-semibold'>
                  Đăng nhập
                </Link>
              </>
            )}
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
      </div>
    </div>,
    targetElement as HTMLElement
  )
}
