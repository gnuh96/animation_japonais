import './App.css'
import {getDb} from './services/db'

function App() {
  const test = getDb()
  console.log(test)

  return <div className='App'></div>
}

export default App
