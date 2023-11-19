import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import Label from 'src/components/Label/Label'
import { path } from 'src/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { LoginData, User } from 'src/types/Auth.type'
import ReCAPTCHA from 'react-google-recaptcha'
import { isAxiosError } from 'axios'
import { useMutation } from 'react-query'
import { AppContext } from 'src/contexts/app.context'
import { loginAPI } from 'src/apis/user.api'
import { toast } from 'react-toastify'
const SignInPage = () => {
  const [capchaValue, setCapchaValue] = useState<{ capcha: string; errorMessage: string }>({
    capcha: '',
    errorMessage: ''
  })
  function onChange(token: string | null) {
    setCapchaValue((prev) => ({ ...prev, capcha: token as string }))
  }
  const schema = yup
    .object({
      email: yup.string().email('Your provided email is invald').required('Please provide your email'),
      password: yup.string().required('Please provide password').min(8, 'Password must be at least 8 characters')
    })
    .required()
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors }
  } = useForm<LoginData>({
    resolver: yupResolver(schema)
  })

  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: loginAPI,
    onSuccess(userData) {
      setIsAuthenticated(true)
      setProfile(userData.data.data.user)
      toast.success('Login Successfully!')
      navigate('/')
    },
    onError(err) {
      if (isAxiosError(err)) {
        let errors = err.response?.data.error
        if (errors && errors.length > 0) {
          errors.forEach((error: { [key: string]: string }) => {
            const keys = Object.keys(error)
            if (keys.length > 0) {
              const firstKey = keys[0] as keyof LoginData
              setError(`${firstKey}`, {
                message: error[firstKey]
              })
            }
          })
        }
      }
    }
  })

  const onSubmit = (value: LoginData) => {
    if (capchaValue.capcha) {
      loginMutation.mutate(value)
    } else {
      setCapchaValue((prev) => ({ ...prev, errorMessage: 'Please confirm capcha validate' }))
    }
  }
  return (
    <div className='flex justify-center flex-col min-h-[40vh]'>
      <form className='max-w-[800px] container' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='mb-4 text-2xl font-semibold'>Entering in our world to be served</h2>
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
            Email <span className='text-red-600'>*</span>
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
            Password <span className='text-red-600'>*</span>
          </Label>
          <span className='mt-4 text-red-600 h-[20px]'>
            {errors && errors.password?.message ? errors.password?.message : ''}
          </span>
        </div>
        <div className='my-5'>
          <ReCAPTCHA sitekey='6LeZaBIpAAAAADeid6TI796uiSKG_h-UyrxcD6Ft' onChange={onChange} />
          <span className='mt-4 text-red-600 h-[20px]'>
            {capchaValue?.errorMessage ? capchaValue?.errorMessage : ''}
          </span>
        </div>
        <Button type='submit' className='text-white bg-black/80 hover:bg-black '>
          Login
        </Button>
        <div className='py-5 font-medium'>
          Didn't have account?{' '}
          <Link to={path.signUp} className='text-blue-500 underline hover:text-red-700'>
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignInPage
