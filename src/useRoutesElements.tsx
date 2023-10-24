import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Homepage from './pages/Home/Homepage'
import MainLayout from './layouts/MainLayout'
import { path } from './constants/path'
import SignInPage from './pages/Login/SignInPage'
import SignUpPage from './pages/SignUp/SignUpPage'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Products from './pages/Products/Products'

const isAuth = false

const RejectedRoute = () => {
  return !isAuth ? <Navigate to='/login'></Navigate> : <Outlet></Outlet>
}

const ProtectedRoute = () => {
  return isAuth ? <Navigate to='/'></Navigate> : <Outlet></Outlet>
}

export default function useRoutesElements() {
  const routes = useRoutes([
    {
      path: '',
      element: <ProtectedRoute></ProtectedRoute>,
      children: [
        {
          path: path.signIn,
          element: (
            <MainLayout>
              <SignInPage></SignInPage>
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
      ]
    },
    {
      path: '',
      element: <RejectedRoute></RejectedRoute>,
      children: [
        {
          path: path.profile,
          element: <MainLayout>Profile</MainLayout>
        }
      ]
    },
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
      path: path.product,
      element: (
        <MainLayout>
          <ProductDetail></ProductDetail>
        </MainLayout>
      )
    },

    {
      path: path.products,
      element: (
        <MainLayout>
          <Products></Products>
        </MainLayout>
      )
    }
  ])
  return routes
}
