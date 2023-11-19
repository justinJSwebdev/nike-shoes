/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from 'react-router-dom'
import { menuOptions } from 'src/constants/menuOptions'
import { CartIcon, MenuMobile, SearchIcon, SignOutIcon } from 'src/icons'
import { path } from 'src/constants/path'
import { useAppDispatch } from 'src/redux/hooks'
import { open } from 'src/redux/features/MenuMobileContext'
import React, { useContext } from 'react'
import PopoverCustom from '../PopoverCustom/PopoverCustom'
import User from 'src/icons/User'
import Popover from '../Popover/Popover'
import { AppContext } from 'src/contexts/app.context'
import { getUserFromLS } from 'src/utils/auth'
import { useMutation } from 'react-query'
import { logoutAPI } from 'src/apis/user.api'
import { toast } from 'react-toastify'
const Header = () => {
  const { isAuthenticated } = useContext(AppContext)
  const dispatch = useAppDispatch()
  function handlePreventPropagation(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    dispatch(open())
    e.stopPropagation()
  }
  const { profile } = useContext(AppContext)
  console.log(profile)
  const logoutMutation = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      toast.success('Logout Successfully !')
    }
  })
  return (
    <header className='h-[72px] w-full fixed top-0 left-0 right-0 shadow-md z-30 bg-black text-white'>
      <nav className='container h-full flex justify-between items-center leading-[72px] relative'>
        <Link to={path.home} className='flex items-center gap-x-3'>
          <img src='../images/logo.png' alt='logo' className='w-[120px] h-[60px] object-contain' />
        </Link>
        <div className='items-center hidden lg:flex '>
          {menuOptions.map((option, index) => (
            <NavLink
              to={option.path}
              className={({ isActive }: { isActive: boolean }) =>
                `${isActive ? 'font-bold ' : 'font-semibold'} text-base   px-3 py-2 transition duration-200`
              }
              key={index}
            >
              {option.title}
            </NavLink>
          ))}
        </div>
        <div className='flex items-center text-white gap-x-5'>
          <Link to='/' className='relative hidden medium:block group w-max'>
            <SearchIcon className='w-[28px] h-[28px]'></SearchIcon>
            <span className='absolute p-2 text-xs text-white transition-opacity bg-black rounded-lg opacity-0 pointer-events-none top-8 -left-8 w-max group-hover:opacity-100 text-semibold'>
              Tìm kiếm sản phẩm
            </span>
          </Link>
          <Popover renderPopover={<div className='min-h'></div>}>
            <Link to={path.cart} className='w-[28px] h-[28px] relative'>
              <CartIcon className='w-full h-full'></CartIcon>
              <div className='absolute w-[20px] h-[20px] rounded-full flex items-center justify-center bg-red-600 text-white text-sm -right-[6px] -top-[6px]'>
                5
              </div>
            </Link>
          </Popover>

          {isAuthenticated && (
            <PopoverCustom
              parentNode={
                <div className='items-center hidden gap-3 medium:flex'>
                  <div className='w-10 h-10 cursor-pointer' aria-hidden='true'>
                    <img
                      src='https://source.unsplash.com/random'
                      alt=''
                      className='object-cover w-full h-full rounded-full'
                    />
                  </div>
                  <h2>{profile && profile.name}</h2>
                </div>
              }
            >
              <div>
                <div className='flex flex-col px-3 border-b border-b-gray-300'>
                  <Link to='/profile' className='font-semibold text-gray-700  hover:text-blue-500 max-h-[60px]'>
                    Account
                  </Link>
                  <Link to='/' className='font-semibold text-gray-700  hover:text-blue-500 max-h-[70px]'>
                    Settings
                  </Link>
                </div>
                <div
                  className='flex w-full items-center gap-3 hover:opacity-80 font-semibold max-h-[70px] cursor-pointer text-black'
                  onClick={() => {
                    logoutMutation.mutate()
                  }}
                >
                  <SignOutIcon className='text-darkGrey'></SignOutIcon>
                  <span>Sign Out</span>
                </div>
              </div>
            </PopoverCustom>
          )}
          {!isAuthenticated && (
            <PopoverCustom parentNode={<User className='cursor-pointer'></User>}>
              <div className='px-4'>
                <Link
                  to={path.signUp}
                  className='block w-full font-semibold text-black border-b cursor-pointer hover:opacity-80 hover:text-black24'
                >
                  <span>Sign Up</span>
                </Link>
                <Link
                  to={path.signIn}
                  className='block w-full font-semibold text-black border-b cursor-pointer hover:opacity-80 hover:text-black24 '
                >
                  <span>Sign In</span>
                </Link>
              </div>
            </PopoverCustom>
          )}
          <div>
            <MenuMobile
              className='w-[28px] h-[28px] block medium:hidden'
              onClick={handlePreventPropagation}
            ></MenuMobile>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
