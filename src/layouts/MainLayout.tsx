import React from 'react'
import { Outlet, useMatch } from 'react-router-dom'
import AuthHeader from 'src/components/AuthHeader/AuthHeader'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { path } from 'src/constants/path'

export default function MainLayout({ children }: { children?: React.ReactNode }) {
  const isLogin = useMatch(path.signIn)
  const isSignUp = useMatch(path.signUp)

  return (
    <React.Fragment>
      <div>{isSignUp || isLogin ? <AuthHeader></AuthHeader> : <Header></Header>}</div>
      <div className='py-[72px]'>{children}</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </React.Fragment>
  )
}
