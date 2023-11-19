import { useEffect, useState, useContext } from 'react'
import Modal from './components/Modal/Modal'
import useRoutesElements from './useRoutesElements'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from './redux/hooks'
import { close } from './redux/features/MenuMobileContext'
import Loading from './components/Loading/Loading'
import { ToastContainer } from 'react-toastify'

// eslint-disable-next-line import/no-unresolved
import GlobalLoading from './components/GlobalLoading/GlobalLoading'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.context'

function App() {
  const routes = useRoutesElements()
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const { refetch } = useContext(AppContext)
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(close())
  }, [pathname, dispatch])
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', refetch)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', refetch)
    }
  }, [refetch])
  return (
    <>
      <ToastContainer />
      {loading && <GlobalLoading></GlobalLoading>}
      <Modal></Modal>
      {routes}
    </>
  )
}

export default App
