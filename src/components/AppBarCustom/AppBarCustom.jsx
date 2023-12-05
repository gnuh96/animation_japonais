import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import {IconButton, Popover} from '@mui/material'
import logoApp from '../../assets/png/IMG423.png'
import MenuIcon from '@mui/icons-material/Menu'
import Icon from '../icon/Icon'
import {useNavigate} from 'react-router-dom'
import './styles.css'

export default function AppBarCustom(props) {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(-1)
  const handleClick = event => {
    setHoveredItem(-1)
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const openUrl = url => window.open(url)

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const listItemWebAccountMenu = [
    {
      onClick: () => openUrl('https://fr.lipsum.com/'),
      title: 'Aide',
      icon: 'help_desktop_menu',
    },
    {
      onClick: () => openUrl('https://fr.lipsum.com/'),

      title: 'Contact',
      icon: 'contact_desktop_menu',
    },
    {
      onClick: () => navigate('/auth/login'),
      title: 'Se connecter',
      icon: 'login_desktop_menu',
    },
  ]

  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <Box sx={{}}>
      <AppBar component='nav' {...props}>
        <Toolbar
          variant='dense'
          sx={{
            backgroundColor: '#FFFFFF',
            color: '#324A76',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 0',
          }}>
          <Box sx={{display: 'flex'}}>
            <img
              src={logoApp}
              style={{height: 45, cursor: 'pointer'}}
              alt='logoApp'
              onClick={handleClickLogo}
            />
            <div style={{width: '250px', display: 'flex', alignItems: 'end'}}>
              <span>pour suivre le mouvement</span>
            </div>
          </Box>
          <Box
            sx={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{mr: 1}}
                onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}>
                <div className='popoverAccount'>
                  {listItemWebAccountMenu.map((item, i) => {
                    return (
                      <div
                        key={`divWebHeader${i}`}
                        onMouseEnter={() => setHoveredItem(i)}
                        onMouseLeave={() => setHoveredItem(-1)}
                        style={{
                          backgroundColor:
                            hoveredItem === i ? '#CAA756' : '#FFFFFF',
                        }}
                        onClick={() => {
                          handleClose()
                          item.onClick()
                        }}
                        className='popoverItemMenu'>
                        <Icon
                          key={`iconWebHeader${i}`}
                          type={item.icon}
                          size={'1.5rem'}
                          color={hoveredItem === i ? `#fff` : '#CAA756'}
                        />
                        <div
                          key={`divSecondWebHeader${i}`}
                          style={{
                            color: hoveredItem === i ? 'white' : '#000000',
                          }}
                          className='itemAccountDesktopMenu --blackPopover'>
                          {item.title}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Popover>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
