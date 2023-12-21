import search from '../../assets/svg/search.svg'
import logo from '../../assets/png/IMG423.png'
import ContactSvg from '../../assets/icones/accountMenu/ContactSvg'
import HelpSvg from '../../assets/icones/accountMenu/HelpSvg'
import LoginSvg from '../../assets/icones/accountMenu/LoginSvg'
import LogoutSvg from '../../assets/icones/accountMenu/LogoutSvg'
import eye_close from '../../assets/svg/eye_close.svg'
import eye_open from '../../assets/svg/eye_open.svg'
export default function Icon({
  type,
  containerClass,
  containerStyle,
  size,
  iconStyle,
  color,
}) {
  const IconMappingObject = {
    search: (
      <img
        src={search}
        alt='icon'
        style={{...iconStyle, height: size, width: size}}
      />
    ),
    logoApp: <img src={logo} alt='icon' style={{...iconStyle, width: size}} />,
    contact_desktop_menu: <ContactSvg size={size} color={color} />,
    help_desktop_menu: <HelpSvg size={size} color={color} />,
    login_desktop_menu: <LoginSvg size={size} color={color} />,
    logout_desktop_menu: <LogoutSvg size={size} color={color} />,
    eye_close: (
      <img
        src={eye_close}
        alt='icon'
        style={{...iconStyle, height: size, width: size}}
      />
    ),
    eye_open: (
      <img
        src={eye_open}
        alt='icon'
        style={{...iconStyle, height: size, width: size}}
      />
    ),
  }
  return (
    <div
      className={containerClass}
      style={{display: 'flex', ...containerStyle}}>
      {IconMappingObject[type]}
    </div>
  )
}
