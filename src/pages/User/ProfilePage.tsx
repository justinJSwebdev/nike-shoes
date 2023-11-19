import React from 'react'

export default function ProfilePage() {
  return (
    <div>
      <h2 className='text-xl font-medium'>Account Detail</h2>
      <div className='flex flex-col justify-center items-center'>
        <img
          src='https://source.unsplash.com/random'
          alt='avatar'
          className='w-[80px] h-[80px] object-cover rounded-full flex-shrink-0'
        />
        <h2 className='text-xl font-medium my-2'>Tran Ky Hung</h2>
        <form action='' className='w-full mt-4 py-5'>
          <div className='w-[70%] mx-auto mb-5'>
            <input type='text' className='w-full rounded-xl outline-none py-3 px-4' placeholder='Email' />
          </div>
          <div className='w-[70%] mx-auto mb-5'>
            <input type='text' className='w-full rounded-xl outline-none py-3 px-4' placeholder='Phone number' />
          </div>
          <div className='w-[70%] mx-auto mb-5'>
            <input type='text' className='w-full rounded-xl outline-none py-3 px-4' placeholder='Date of birth' />
          </div>
        </form>
      </div>
    </div>
  )
}
