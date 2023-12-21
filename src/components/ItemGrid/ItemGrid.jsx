import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import testImage from '../../assets/png/image 1.png'
import {useEffect, useState} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../services/db.services'

const ItemGrid = () => {
  const [listProjet, setListProjet] = useState([])
  useEffect(() => {
    // Use db here
    // Example: Retrieve data from Firestore
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
  const itemData = [
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
    {
      img: testImage,
      title: 'Projet test',
      author: 'hung@test.com',
    },
  ]
  return (
    <ImageList cols={3}>
      {listProjet.map(item => (
        <ImageListItem key={item.thumbnail}>
          <img src={item.thumbnail} alt={item.title} loading='lazy' />
          <ImageListItemBar
            title={item.title}
            subtitle={item.userMail}
            actionIcon={
              <IconButton
                sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                aria-label={`info about ${item.title}`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ItemGrid
