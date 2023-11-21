import {getDb} from '../services/db.services'
import './css/root.css'

function Root(props) {
  const test = getDb()
  console.log(test)
  return <div className='Root'>Root</div>
}

export default Root
