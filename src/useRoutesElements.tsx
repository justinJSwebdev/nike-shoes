import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Homepage from './pages/Home/Homepage'
import MainLayout from './layouts/MainLayout'
import { path } from './constants/path'
import SignInPage from './pages/Login/SignInPage'
import SignUpPage from './pages/SignUp/SignUpPage'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Products from './pages/Products/Products'
import CartPage from './pages/Cart/CartPage'
import UserLayout from './layouts/User/UserLayout'
import ProfilePage from './pages/User/ProfilePage'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Navigate to='/login'></Navigate> : <Outlet></Outlet>
}

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Navigate to='/'></Navigate> : <Outlet></Outlet>
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
          element: <MainLayout />,
          children: [
            {
              path: '',
              element: <UserLayout></UserLayout>,
              children: [
                {
                  element: <ProfilePage></ProfilePage>,
                  index: true
                }
              ]
            }
          ]
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
    },
    {
      path: path.cart,
      element: (
        <MainLayout>
          <CartPage></CartPage>
        </MainLayout>
      )
    }
  ])
  return routes
}
