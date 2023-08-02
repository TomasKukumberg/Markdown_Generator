import { useState } from 'react'
import Heading from './components/Heading/Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Heading />
    </div>
  )
}

export default App
