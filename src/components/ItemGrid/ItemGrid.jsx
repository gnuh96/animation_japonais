import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import {useEffect} from 'react'

import InfoIcon from '@mui/icons-material/Info'

// routing to detail page
import {useNavigate} from 'react-router-dom'

// listProject props : all tuples
const ItemGrid = ({listProjet}) => {
  console.log('listProjec props', listProjet)

  // TODO : navigation to detail page
  const navigate = useNavigate()

  const handleItemClick = id => {
    navigate(`/detail/${id}`)
  }

  return (
    <ImageList cols={3}>
      {listProjet.map((item, i) => (
        <ImageListItem key={`listprojet_${i}`}>
          <img src={item.thumbnail} alt={item.title} loading='lazy' />
          <ImageListItemBar
            title={item.title}
            subtitle={item.userMail}
            actionIcon={
              <IconButton
                sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                aria-label={`info about ${item.title}`}
                onClick={() => handleItemClick(item.id)}>
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
