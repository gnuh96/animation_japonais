import './Intrucstion.css'
import {useNavigate} from 'react-router-dom'
import testImage from '../../assets/png/image 1.png'

function Intrucstion(props) {
  const navigate = useNavigate()
  const listBar = [
    {title: 'A propos', onClick: () => navigate('/')},
    {title: 'Comprendre l’animation', onClick: () => navigate('/intrucstion')},
    {title: 'Communauté', onClick: () => navigate('/')},
  ]

  const listInfor = [
    {
      title: 'L’animation 2D, c’est quoi ?',
      contenu:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: testImage,
    },
    {
      title: 'L’industrie de l’animation au japon',
      contenu:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: testImage,
    },
    {
      title: 'Les étapes d’une scène animée au Japon ',
      image: testImage,
    },
    {
      title: 'Le rôle de l’animateur',
      contenu:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
      title: 'Les méthodes et techniques d’animation 2D',
      contenu:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: testImage,
    },
  ]
  return (
    <div className='intrucstion'>
      <div className='homeBar'>
        {listBar.map((ele, i) => (
          <button
            className='itemBar'
            key={`bar_${i}`}
            onClick={() => {
              console.log(`Button ${i} clicked`)
              ele.onClick()
            }}>
            {ele.title}
          </button>
        ))}
      </div>
      <div className='intrucstionContainer'>
        {listInfor.map((ele, i) => (
          <div key={`listinfo_${i}`}>
            <h1>{ele.title}</h1>
            {ele.contenu && <span>{ele.contenu}</span>}
            {ele.image && <img src={ele.image} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Intrucstion
