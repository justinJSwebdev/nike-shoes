import Modal from './components/Modal/Modal'
import useRoutesElements from './useRoutesElements'

function App() {
  const routes = useRoutesElements()
  return (
    <>
      <Modal></Modal>
      {routes}
    </>
  )
}

export default App
