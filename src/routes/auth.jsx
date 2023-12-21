import {Outlet} from 'react-router-dom'
import './css/auth.css'
import packageJson from '../../package.json'
import AppBarCustom from '../components/AppBarCustom/AppBarCustom'

export default function Auth() {
  return (
    <div className='AuthContainer'>
      <AppBarCustom />
      <div className='FormContainer'>
        <div className='FormWrapper'>
          <Outlet />
        </div>
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
