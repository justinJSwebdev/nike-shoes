import React from 'react'
import { useMatch } from 'react-router-dom'
import AuthHeader from 'src/components/AuthHeader/AuthHeader'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { path } from 'src/constants/path'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const isLogin = useMatch(path.signIn)
  const isSignUp = useMatch(path.signUp)

  return (
    <React.Fragment>
      <div className='h-[90px]'>{isSignUp || isLogin ? <AuthHeader></AuthHeader> : <Header></Header>}</div>
      {children}
      <Footer></Footer>
    </React.Fragment>
  )
}
