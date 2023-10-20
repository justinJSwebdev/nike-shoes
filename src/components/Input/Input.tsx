import React from 'react'

type InputProps = {
  className?: string
  type: string
  name: string
  id: string
} & React.InputHTMLAttributes<HTMLInputElement>
export default function Input({ className, type, name, id, ...rest }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder=''
      className={`block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white font-medium focus:outline-none focus:ring-0 focus:border-yellowLinear peer relative ${className}`}
      {...rest}
    />
  )
}
