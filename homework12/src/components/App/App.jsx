import ValueDisplay from '../ValueDisplay/ValueDisplay'

import { useState } from 'react'

import './App.css'
import '../../styles/reset.css'
import '../../styles/common.css'

function App() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <main>
      <h1>Текущее и предыдущее значения</h1>
      <input onChange={handleChange} type="text" value={value} />
      <ValueDisplay value={value} />
    </main>
  )
}

export default App;