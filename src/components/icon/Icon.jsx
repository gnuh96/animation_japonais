import search from '../../assets/svg/search.svg'
import logo from '../../assets/png/IMG423.png'
export default function Icon({
  type,
  containerClass,
  containerStyle,
  size,
  iconStyle,
}) {
  const IconMappingObject = {
    search: (
      <img
        src={search}
        alt='icon'
        style={{...iconStyle, height: size, width: size}}
      />
    ),
    logo: (
      <img
        src={logo}
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
