import React from 'react'
import { Outlet } from 'react-router-dom'
import UserSideNav from './UserSideNav'

export default function UserLayout() {
  return (
    <div className='container'>
      <h2 className='text-xl font-medium pb-[36px]'>User Account</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
        <div className='md:col-span-4 lg:col-span-3'>
          <UserSideNav></UserSideNav>
        </div>
        <div className='md:col-span-8 lg:col-span-9'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
