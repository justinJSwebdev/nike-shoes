import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { type?: 'submit'; className?: string }
export default function Button({ children, className, type, ...rest }: Props) {
  return (
    <button
      type={type}
      className={`w-full h-[60px] bg-yellowLinear px-6 text-center text-white hover:bg-yellow-500 transition duration-300 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}