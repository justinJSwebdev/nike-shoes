/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from 'react-router-dom'
import { menuOptions } from 'src/constants/menuOptions'
import { CartIcon, MenuMobile, SearchIcon } from 'src/icons'
import Popover from '../Popover/Popover'
import { path } from 'src/constants/path'
import { useAppDispatch } from 'src/redux/hooks'
import { open } from 'src/redux/features/MenuMobileContext'
import React from 'react'
import Popover2 from '../Popover2/Popover2'
const Header = () => {
  const isAuthenticated = !true
  const dispatch = useAppDispatch()
  function handlePreventPropagation(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    dispatch(open())
    e.stopPropagation()
  }
  return (
    <header className='h-[90px] w-full fixed top-0 left-0 right-0 shadow-md z-10 bg-white'>
      <nav className='container h-full flex justify-between items-center leading-[90px] relative'>
        <Link to={path.home} className='flex items-center gap-x-3'>
          <img src='../images/logo.png' alt='logo' className='w-[40px] h-[40px] object-cover flex-shrink-0' />
          <h1 className='font-title font-semibold text-2xl '>She's Cos</h1>
        </Link>
        <div className='hidden lg:flex items-center '>
          {menuOptions.map((option, index) => (
            <NavLink
              to={option.path}
              className={({ isActive }) =>
                `${
                  isActive ? 'font-bold text-yellowLinear' : 'font-semibold'
                } text-base hover:text-yellowLinear  px-3 py-2 transition duration-200`
              }
              key={index}
            >
              {option.title}
            </NavLink>
          ))}
        </div>
        <div className='flex items-center gap-x-5'>
          <Link to='/' className='hidden medium:block group relative w-max'>
            <SearchIcon className='w-[28px] h-[28px]'></SearchIcon>
            <span className='pointer-events-none absolute top-8 -left-8 w-max opacity-0 transition-opacity group-hover:opacity-100 text-xs text-semibold bg-black text-white p-2 rounded-lg'>
              Tìm kiếm sản phẩm
            </span>
          </Link>
          <Link to='/'>
            <CartIcon className='w-[28px] h-[28px]'></CartIcon>
          </Link>
          {!isAuthenticated && <Popover2></Popover2>}
          {isAuthenticated && (
            <Popover
              className='hidden medium:flex cursor-pointer items-center py-1 hover:text-black24 '
              renderPopover={
                <div className='rounded-sm border border-gray-200 bg-white shadow-md '>
                  <Link
                    to='/profile'
                    className='block bg-white px-3 py-2 text-left hover:bg-slate-100 hover:text-yellowLinear font-medium'
                  >
                    Thông tin của tôi
                  </Link>
                  <Link
                    to='/'
                    className='block bg-white px-3 py-2 text-left hover:bg-slate-100 hover:text-yellowLinear font-medium'
                  >
                    Đơn mua
                  </Link>
                  <button
                    className='block w-full bg-white px-3 py-2 text-left hover:bg-slate-100 hover:text-yellowLinear font-medium'
                    // onClick={handleLogout}
                  >
                    Đăng xuất
                  </button>
                </div>
              }
            >
              <div className='flex items-center'>
                <h3 className='font-semibold'>Tran Ky Hung</h3>
                <div className='ml-2 h-10 w-10 flex-shrink-0'>
                  <img
                    src='https://source.unsplash.com/random'
                    alt='avatar'
                    className='h-full w-full rounded-full object-cover'
                  />
                </div>
              </div>
            </Popover>
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
