import './css/root.css'
import {Outlet} from 'react-router-dom'
import packageJson from '../../package.json'
import AppBarCustom from '../components/AppBarCustom/AppBarCustom'

function Root(props) {
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
