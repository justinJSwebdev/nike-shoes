import React from 'react'
import Spinner from '../Spinner/Spinner'

export default function GlobalLoading() {
  return (
    <div className='fixed w-full h-full bg-black z-50 flex items-center justify-center flex-col'>
      <img src='../images/logo.png' alt='logo' />
      <Spinner></Spinner>
    </div>
  )
}
