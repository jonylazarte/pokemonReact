import { useState } from 'react'
import MainPage from './pages/MainPage/index.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage></MainPage>
    </>
  )
}

export default App
