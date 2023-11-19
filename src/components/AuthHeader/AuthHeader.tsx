/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import { path } from 'src/constants/path'

const AuthHeader = () => {
  const isMatch = useMatch(path.signIn)
  return (
    <header className='py-5 bg-black shadow-lg'>
      <div className='container '>
        <nav className='flex items-center'>
          <Link to={path.home} className='flex items-center gap-x-3'>
            <img src='./images/logo.png' alt='logo' className='w-[120px] h-[60px] object-cover flex-shrink-0' />
          </Link>
          <div className='ml-5 text-xl font-semibold text-white lg:text-2xl'>{isMatch ? 'Login' : 'Sign Up'}</div>
        </nav>
      </div>
    </header>
  )
}

export default AuthHeader
