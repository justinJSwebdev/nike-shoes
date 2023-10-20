import useRoutesElements from './useRoutesElements'

function App() {
  const routes = useRoutesElements()
  console.log(routes);
  return <>{routes}</>
}

export default App
