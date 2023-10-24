import { useEffect } from 'react'
import Modal from './components/Modal/Modal'
import useRoutesElements from './useRoutesElements'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from './redux/hooks'
import { close } from './redux/features/MenuMobileContext'
import Loading from './components/Loading/Loading'
// eslint-disable-next-line import/no-unresolved
import { Toaster } from 'sonner'

function App() {
  const routes = useRoutesElements()
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(close())
  }, [pathname, dispatch])

  return (
    <>
      <Toaster />
      <Loading></Loading>
      <Modal></Modal>
      {routes}
    </>
  )
}

export default App
