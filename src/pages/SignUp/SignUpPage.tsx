/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import Label from 'src/components/Label/Label'
import { path } from 'src/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import { RegisterData } from 'src/types/Auth.type'
import { useContext, useState } from 'react'
import { AppContext } from 'src/contexts/app.context'
import ReCAPTCHA from 'react-google-recaptcha'
import { signUpAPI } from 'src/apis/user.api'
import { toast } from 'react-toastify'
import { isAxiosError } from 'src/utils/error'
const schema = yup
  .object({
    name: yup.string().required('Please provide your name'),
    email: yup.string().email('Your provided email is invald').required('Please provide your email'),
    password: yup.string().required('Please provide password').min(8, 'Password must be at least 8 characters'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords is not match')
      .required('Please provide confirm password')
  })
  .required()

export default function SignUpPage() {
  const [capchaValue, setCapchaValue] = useState<{ capcha: string; errorMessage: string }>({
    capcha: '',
    errorMessage: ''
  })
  function onChange(token: string | null) {
    setCapchaValue((prev) => ({ ...prev, capcha: token as string }))
  }
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors }
  } = useForm<RegisterData>({
    resolver: yupResolver(schema)
  })

  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const signUpMutation = useMutation({
    mutationFn: signUpAPI,
    onSuccess() {
      setIsAuthenticated(true)
      navigate('/')
      toast.success('Tạo tài khoản thành công')
    },
    onError(err) {
      if (isAxiosError(err)) {
        console.log(err)
        let errors = err.response?.data.error
        if (errors && errors.length > 0) {
          errors.forEach((error: { [key: string]: string }) => {
            const keys = Object.keys(error)
            if (keys.length > 0) {
              const firstKey = keys[0] as keyof RegisterData
              console.log(firstKey)
              setError(`${firstKey}`, {
                message: error[firstKey]
              })
            }
          })
        }
      }
    }
  })
  const onSubmit = (value: RegisterData) => {
    if (capchaValue.capcha) {
      signUpMutation.mutate(value)
    } else {
      setCapchaValue((prev) => ({ ...prev, errorMessage: 'Please confirm capcha validate' }))
    }
  }
  return (
    <div className='flex justify-center flex-col min-h-[40vh]' onSubmit={handleSubmit(onSubmit)}>
      <form className='container mt-6 max-w-[800px]' autoComplete='false'>
        <h2 className='mb-4 text-2xl font-semibold'>Register Our Membership</h2>
        <div className='relative z-0 w-full mb-6 group'>
          <Controller
            control={control}
            defaultValue=''
            name='name'
            render={({ field: { onChange, value } }) => (
              <Input id='fullname' type='text' onChange={onChange} value={value}></Input>
            )}
          />
          <Label htmlFor='password'>
            Customer's name <span className='text-red-600'>*</span>
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
            User email <span className='text-red-600'>*</span>
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
            Password <span className='text-red-600'>*</span>
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
            Confirm Password <span className='text-red-600'>*</span>
          </Label>
          <span className='mt-4 text-red-600 h-[20px]'>
            {errors && errors.confirm_password?.message ? errors.confirm_password?.message : ''}
          </span>
        </div>
        {/* <GoogleCapcha></GoogleCapcha> */}
        <div className='my-5'>
          <ReCAPTCHA sitekey='6LeZaBIpAAAAADeid6TI796uiSKG_h-UyrxcD6Ft' onChange={onChange} />
          <span className='mt-4 text-red-600 h-[20px]'>
            {capchaValue?.errorMessage ? capchaValue?.errorMessage : ''}
          </span>
        </div>
        <Button type='submit' className='text-white bg-black/80 hover:bg-black'>
          Sign Up
        </Button>
        <div className='py-5 font-medium'>
          Already have an account?{' '}
          <Link to={path.signIn} className='text-blue-500 underline hover:text-red-700'>
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}
