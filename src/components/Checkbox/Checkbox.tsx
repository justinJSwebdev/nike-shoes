import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { CheckIcon } from 'src/icons'
interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export default function Checkbox(props: IProps) {
  return (
    <label className={`custom-checkbox w-5 h-5 block cursor-pointer ${props.className}`}>
      <input type='checkbox' className='hidden' {...props} />
      <div className='w-full h-full bg-thinGrey rounded-md relative'>
        <div className='absolute w-full h-full bg-darkGrey rounded-md items-center justify-center hidden'>
          <CheckIcon className='w-3 h-3 text-white'></CheckIcon>
        </div>
      </div>
    </label>
  )
}
