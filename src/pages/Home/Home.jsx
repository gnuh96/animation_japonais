import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css'
import InputSearch from '../../components/inputSearch/InputSearch'
import testImage from '../../assets/png/image 1.png'
import ItemGrid from '../../components/ItemGrid/ItemGrid'
Home.propTypes = {}

function Home(props) {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [tag, setTag] = useState()
  const listBar = [
    {title: 'A propos', onClick: () => navigate('/')},
    {title: 'Comprendre l’animation', onClick: () => navigate('/')},
    {title: 'Communauté', onClick: () => navigate('/')},
  ]
  const listTab = ['Tag 1', 'Tag 2', 'Tag 3']

  const images = [
    testImage,
    testImage,
    testImage,
    testImage,
    testImage,
    testImage,
  ]
  return (
    <div className='home'>
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
      <div className='homeSearch'>
        <InputSearch
          placeholder='Recherche'
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className='listTag'>
          {listTab.map((ele, i) => (
            <button
              className='itemBar'
              key={`tag_${i}`}
              onClick={() => {
                setTag(ele)
              }}>
              {ele}
            </button>
          ))}
        </div>
      </div>
      <ItemGrid images={images} />
    </div>
  )
}

export default Home
