import { useRoutes } from 'react-router-dom'
import Homepage from './pages/Home/Homepage'
import MainLayout from './layouts/MainLayout'
import { path } from './constants/path'
import SignInPage from './pages/Login/SignInPage'
import SignUpPage from './pages/SignUp/SignUpPage'
import ProductDetail from './pages/ProductDetail/ProductDetail'

export default function useRoutesElements() {
  const routes = useRoutes([
    {
      path: path.home,
      element: (
        <MainLayout>
          <Homepage></Homepage>
        </MainLayout>
      ),
      index: true
    },
    {
      path: path.signIn,
      element: (
        <MainLayout>
          <SignInPage></SignInPage>
        </MainLayout>
      )
    },
    {
      path: path.product,
      element: (
        <MainLayout>
          <ProductDetail></ProductDetail>
        </MainLayout>
      )
    },
    {
      path: path.signUp,
      element: (
        <MainLayout>
          <SignUpPage></SignUpPage>
        </MainLayout>
      )
    }
  ])
  return routes
}
