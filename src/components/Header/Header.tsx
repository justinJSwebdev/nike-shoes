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
    <header className='h-[72px] w-full fixed top-0 left-0 right-0 shadow-md z-30 bg-black text-white'>
      <nav className='container h-full flex justify-between items-center leading-[72px] relative'>
        <Link to={path.home} className='flex items-center gap-x-3'>
          <h1 className='text-2xl font-semibold font-title '>NK</h1>
        </Link>
        <div className='items-center hidden lg:flex '>
          {menuOptions.map((option, index) => (
            <NavLink
              to={option.path}
              className={({ isActive }) =>
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
          <Link to='/'>
            <CartIcon className='w-[28px] h-[28px]'></CartIcon>
          </Link>
          {!isAuthenticated && <Popover2></Popover2>}
          {isAuthenticated && (
            <Popover
              className='items-center hidden py-1 cursor-pointer medium:flex hover:text-black24 '
              renderPopover={
                <div className='text-black bg-white border border-gray-200 rounded-sm shadow-md'>
                  <Link
                    to='/profile'
                    className='block px-3 py-2 font-medium text-left bg-white hover:bg-slate-100 hover:text-yellowLinear'
                  >
                    Thông tin của tôi
                  </Link>
                  <Link
                    to='/'
                    className='block px-3 py-2 font-medium text-left bg-white hover:bg-slate-100 hover:text-yellowLinear'
                  >
                    Đơn mua
                  </Link>
                  <button
                    className='block w-full px-3 py-2 font-medium text-left text-black bg-white hover:bg-slate-100 hover:text-yellowLinear'
                    // onClick={handleLogout}
                  >
                    Đăng xuất
                  </button>
                </div>
              }
            >
              <div className='flex items-center'>
                <h3 className='font-semibold'>Tran Ky Hung</h3>
                <div className='flex-shrink-0 w-10 h-10 ml-2'>
                  <img
                    src='https://source.unsplash.com/random'
                    alt='avatar'
                    className='object-cover w-full h-full rounded-full'
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
