import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import Label from 'src/components/Label/Label'
import { path } from 'src/constants/path'

const SignInPage = () => {
  return (
    <div className='flex justify-center flex-col min-h-[40vh]'>
      <form className='max-w-[800px] container'>
        <h2 className='font-semibold text-2xl mb-4'>Đăng Nhập</h2>
        <div className='relative z-0 w-full mb-6 group'>
          <Input id='email' name='email' type='email'></Input>
          <Label htmlFor='email'>
            {' '}
            Email của bạn <span className='text-red-600'>*</span>
          </Label>
        </div>

        <div className='relative z-0 w-full mb-6 group'>
          <Input id='password' name='password' type='password'></Input>
          <Label htmlFor='password'>
            {' '}
            Mật Khẩu <span className='text-red-600'>*</span>
          </Label>
        </div>
        <Button type='submit'>Đăng nhập</Button>
        <div className='font-medium py-5'>
          Chưa có tài khoản?{' '}
          <Link to={path.signUp} className='text-blue-500 underline hover:text-red-700'>
            Đăng Ký
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignInPage
