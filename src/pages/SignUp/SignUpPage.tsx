/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import Label from 'src/components/Label/Label'
import { path } from 'src/constants/path'

export default function SignUpPage() {
  return (
    <div className='flex justify-center flex-col min-h-[40vh]'>
      <form className='container mt-6 max-w-[800px]'>
        <h2 className='font-semibold text-2xl mb-4'>Đăng Ký Thành Viên</h2>
        <div className='relative z-0 w-full mb-6 group'>
          <Input id='fullname' name='fullname' type='text'></Input>
          <Label htmlFor='password'>
            {' '}
            Họ và Tên <span className='text-red-600'>*</span>
          </Label>
        </div>
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
        <div className='relative z-0 w-full mb-6 group'>
          <Input id='password' name='password' type='password'></Input>
          <Label htmlFor='password'>
            {' '}
            Nhập lại Mật Khẩu <span className='text-red-600'>*</span>
          </Label>
        </div>
        <Button type='submit'>Đăng Ký</Button>
        <div className='font-medium py-5'>
          Đã có tài khoản?{' '}
          <Link to={path.signIn} className='text-blue-500 underline hover:text-red-700'>
            Đăng Nhập
          </Link>
        </div>
      </form>
    </div>
  )
}
