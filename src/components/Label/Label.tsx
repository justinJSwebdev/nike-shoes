import React from 'react'

type LabelProps = {
  htmlFor: string
  className?: string
  children: React.ReactNode
} & React.LabelHTMLAttributes<HTMLLabelElement>
export default function Label({ htmlFor, className, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-medium peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellowLinear  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg ${className}`}
    >
      {children}
    </label>
  )
}
