import './css/root.css'
import {Outlet, useNavigate} from 'react-router-dom'
import packageJson from '../../package.json'
import AppBarCustom from '../components/AppBarCustom/AppBarCustom'
import {useEffect} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

function Root(props) {
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        navigate('/auth/login')
      }
    })

    return () => {
      unsubscribe()
    }
  }, [navigate])
  return (
    <div className='rootContainer'>
      <AppBarCustom />
      <div className='outletContainer'>
        <Outlet />
      </div>
      <div className='footerFixed'>
        <span className='--goldMedium'>
          Copyright @ Master THYP-NET-MTI. Tous droits réservés. Webdesign by
          THYP
        </span>
        <span className='appVersion --goldMedium'>{`V ${
          packageJson?.version || '0.0.0'
        }`}</span>
      </div>
    </div>
  )
}

export default Root
