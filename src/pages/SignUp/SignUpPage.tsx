/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import Label from 'src/components/Label/Label'
import { path } from 'src/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { useMutation } from 'react-query'
type FormSignUp = {
  name: string
  email: string
  password: string
  confirm_password: string
}

const schema = yup
  .object({
    name: yup.string().required('Vui lòng nhập tên'),
    email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: yup.string().required('Password là bắt buộc').min(8, 'Password must be at least 8 characters'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords không khớp')
      .required('Hãy nhập lại password')
  })
  .required()
export default function SignUpPage() {
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors }
  } = useForm<FormSignUp>({
    resolver: yupResolver(schema)
  })
  // const registerMutation = useMutation({
  //   mutationFn: registerAPI,
  //   onSuccess: (data) => {
  //     console.log(data.data)
  //   }
  // })
  // const onSubmit: SubmitHandler<FormSignUp> = (value: FormSignUp) => {
  //   registerMutation.mutate(value)
  // }

  return (
    <div className='flex justify-center flex-col min-h-[40vh]'>
      <form className='container mt-6 max-w-[800px]' autoComplete='false'>
        <h2 className='mb-4 text-2xl font-semibold'>Đăng Ký Thành Viên</h2>
        <div className='relative z-0 w-full mb-6 group'>
          <Controller
            control={control}
            defaultValue=''
            name='name'
            render={({ field: { onChange, value } }) => (
              <Input id='firstName' type='text' onChange={onChange} value={value}></Input>
            )}
          />
          <Label htmlFor='password'>
            {' '}
            Họ và Tên <span className='text-red-600'>*</span>
          </Label>
          <span className='mt-4 text-red-600 h-[20px]'>
            {errors && errors.name?.message ? errors.name?.message : ''}
          </span>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <Controller
            control={control}
            defaultValue=''
            name='email'
            render={({ field: { onChange, value } }) => (
              <Input id='email' type='text' onChange={onChange} value={value}></Input>
            )}
          />
          <Label htmlFor='email'>
            {' '}
            Email của bạn <span className='text-red-600'>*</span>
          </Label>
          <span className='mt-4 text-red-600 h-[20px]'>
            {errors && errors.email?.message ? errors.email?.message : ''}
          </span>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <Controller
            control={control}
            defaultValue=''
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input id='password' type='password' onChange={onChange} value={value}></Input>
            )}
          />
          <Label htmlFor='password'>
            {' '}
            Mật Khẩu <span className='text-red-600'>*</span>
          </Label>
          <span className='mt-4 text-red-600 h-[20px]'>
            {errors && errors.confirm_password?.message ? errors.password?.message : ''}
          </span>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <Controller
            control={control}
            defaultValue=''
            name='confirm_password'
            render={({ field: { onChange, value } }) => (
              <Input id='confirm_password' type='password' onChange={onChange} value={value}></Input>
            )}
          />
          <Label htmlFor='password'>
            {' '}
            Nhập lại Mật Khẩu <span className='text-red-600'>*</span>
          </Label>
          <span className='mt-4 text-red-600 h-[20px]'>
            {errors && errors.confirm_password?.message ? errors.confirm_password?.message : ''}
          </span>
        </div>
        {/* <GoogleCapcha></GoogleCapcha> */}
        <Button type='submit'>Đăng Ký</Button>
        <div className='py-5 font-medium'>
          Đã có tài khoản?{' '}
          <Link to={path.signIn} className='text-blue-500 underline hover:text-red-700'>
            Đăng Nhập
          </Link>
        </div>
      </form>
    </div>
  )
}
