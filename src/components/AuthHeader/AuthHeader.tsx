/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import { path } from 'src/constants/path'

const AuthHeader = () => {
  const isMatch = useMatch(path.signIn)
  return (
    <header className='py-5 shadow-lg'>
      <div className='container '>
        <nav className='flex items-center'>
          <Link to={path.home} className='flex items-center gap-x-3'>
            <img src='./images/logo.png' alt='logo' className='w-[40px] h-[40px] object-cover flex-shrink-0' />
            <h1 className='font-title font-semibold text-2xl '>She's Cos</h1>
          </Link>
          <div className='ml-5 text-xl lg:text-2xl font-semibold'>{isMatch ? 'Đăng nhập' : 'Đăng Ký'}</div>
        </nav>
      </div>
    </header>
  )
}

export default AuthHeader
