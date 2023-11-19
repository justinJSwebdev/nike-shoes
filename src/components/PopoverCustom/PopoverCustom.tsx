import React, { useEffect, useState, useRef } from 'react'

type IPopover = {
  parentNode: React.ReactNode
  children: React.ReactNode
}

export default function PopoverCustom({ parentNode, children }: IPopover) {
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
      setIsShow(false)
      document.removeEventListener('click', handleClickOutPopover)
    }
  }, [])
  return (
    <div className='relative' ref={nodeRef} onClick={handleClickAvatar}>
      {parentNode}
      {isShow && <PopoverContent>{children}</PopoverContent>}
    </div>
  )
}
function PopoverContent({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute top-full bg-white rounded-2xl shadow z-10 w-[180px] lg:w-[200px] px-3 right-0'>
      {children}
    </div>
  )
}
