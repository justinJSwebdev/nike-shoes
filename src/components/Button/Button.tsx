import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { type?: string; className?: string }
export default function Button({
  children,
  className = 'bg-white text-darkGrey hover:bg-black hover:text-white',
  type,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`w-full flex items-center justify-center  px-3 py-3 text-center  transition duration-300  rounded-[100px] font-semibold ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
