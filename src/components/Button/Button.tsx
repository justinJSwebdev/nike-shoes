import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { type?: string; className?: string }
export default function Button({ children, className, type, ...rest }: Props) {
  return (
    <button
      type={type}
      className={`w-full  bg-white px-3 py-3 text-center text-darkgrey hover:bg-black hover:text-white transition duration-300  rounded-[100px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
