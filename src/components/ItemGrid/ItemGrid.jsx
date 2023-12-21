import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

const ItemGrid = ({listProjet}) => {
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
