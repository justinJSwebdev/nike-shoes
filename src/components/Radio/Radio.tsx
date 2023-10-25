import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export default function Radio(props: IProps) {
  return (
    <label className='w-[12px] h-[12px] block cursor-pointer custom-radio '>
      <input type='radio' name={props.name} className='hidden' {...props} />
      <div className='w-full h-full rounded-full bg-white shadow-2xl'></div>
    </label>
  )
}
