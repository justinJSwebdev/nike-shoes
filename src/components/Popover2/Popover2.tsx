import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SignOutIcon } from 'src/icons'

export default function Popover2() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const handleClickAvatar = () => {
    setIsShow((isShow) => !isShow)
  }
  const nodeRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleClickOutPopover(this: Document, ev: MouseEvent) {
      if (nodeRef.current && !nodeRef.current.contains(ev.target as Node)) {
        setIsShow(false)
      }
    }
    document.addEventListener('click', handleClickOutPopover)
    return () => {
      document.removeEventListener('click', handleClickOutPopover)
    }
  }, [])
  return (
    <div className='relative' ref={nodeRef}>
      <div className='w-10 h-10 cursor-pointer' onClick={handleClickAvatar} aria-hidden='true'>
        <img src='https://source.unsplash.com/random' alt='' className='w-full h-full object-cover rounded-full' />
      </div>
      {isShow && <PopoverContent></PopoverContent>}
    </div>
  )
}
function PopoverContent() {
  return (
    <div className='absolute top-full bg-white rounded-2xl shadow z-10 w-[180px] lg:w-[200px] px-3 right-0'>
      <div className='flex flex-col border-b border-b-gray-300 px-3'>
        <Link to='/' className='font-semibold text-gray-700  hover:text-blue-500 max-h-[60px]'>
          Account
        </Link>
        <Link to='/' className='font-semibold text-gray-700  hover:text-blue-500 max-h-[70px]'>
          Settings
        </Link>
      </div>
      <div className='flex w-full items-center gap-3 hover:opacity-80 font-semibold max-h-[70px] cursor-pointer '>
        <SignOutIcon className='text-darkGrey'></SignOutIcon>
        <span>Sign Out</span>
      </div>
    </div>
  )
}
