import React from 'react'
import { Link } from 'react-router-dom'
import Cart from 'src/icons/Cart'
import Privacy from 'src/icons/Privacy'
import User from 'src/icons/User'

export default function UserSideNav() {
  return (
    <div>
      <Link to='/' className='flex items-end font-medium mb-5'>
        <User className='w-[28px] h-[28px] mr-3'></User>
        Account Details
      </Link>
      <Link to='/' className='flex items-end font-medium mb-5'>
        <Cart className='w-[28px] h-[28px] mr-3 text-md '></Cart>
        Orders
      </Link>
      <Link to='/' className='flex items-end font-medium mb-5'>
        <Privacy className='w-[28px] h-[28px] mr-3'></Privacy>
        Change Password
      </Link>
    </div>
  )
}
