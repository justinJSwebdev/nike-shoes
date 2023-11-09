import React from 'react'
import ReactDOM from 'react-dom'
import Spinner from '../Spinner/Spinner'
export default function Loading({ isLoading }: { isLoading: boolean }) {
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 bg-green-500 text-white z-50 w-full transition duration-300
       ${isLoading ? 'translate-x-0' : 'translate-x-full'} flex justify-center items-center
      `}
    >
      <Spinner></Spinner>
    </div>,
    document.getElementById('root') as HTMLElement
  )
}
