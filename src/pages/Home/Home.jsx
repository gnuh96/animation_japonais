import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css'
import InputSearch from '../../components/inputSearch/InputSearch'
import ItemGrid from '../../components/ItemGrid/ItemGrid'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../services/db.services'
Home.propTypes = {}

function Home(props) {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [tag, setTag] = useState()
  const [listProjet, setListProjet] = useState([])
  const [listProjetFiltered, setListProjetFiltered] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let newlist = []
        const querySnapshot = await getDocs(collection(db, 'projet'))
        querySnapshot.forEach(doc => {
          const data = doc.data()
          newlist.push(data)
        })
        setListProjet(newlist)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  const listBar = [
    {title: 'A propos', onClick: () => navigate('/')},
    {title: 'Comprendre l’animation', onClick: () => navigate('/intrucstion')},
    {title: 'Communauté', onClick: () => navigate('/')},
  ]
  const listTab = ['Tag 1', 'Tag 2', 'Tag 3']

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
          initialList={listProjet}
          placeholder='Recherche'
          searchKey='title'
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setResults={setListProjetFiltered}
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
      <ItemGrid
        listProjet={searchValue.length >= 2 ? listProjetFiltered : listProjet}
      />
    </div>
  )
}

export default Home
