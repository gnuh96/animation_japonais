import {useState} from 'react'
import InputSearch from '../components/inputSearch/InputSearch'
import {getDb} from '../services/db.services'
import screen from '../assets/png/image 1.png'
import './css/root.css'
import {Box, Drawer, Typography} from '@mui/material'
import Icon from '../components/icon/Icon'

function Root(props) {
  const [searchInputvalue, setSearchInputvalue] = useState('')

  const test = getDb()
  console.log(test)
  return (
    <div className='Root'>
      <Box sx={{display: 'flex', width: '100%'}}>
        <Drawer
          variant='permanent'
          sx={{
            width: 350,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 350,
              boxSizing: 'border-box',
            },
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '20px',
            }}>
            <Icon type='logo' iconStyle={{height: '50px', width: '100%'}} />
          </Box>

          <Box
            sx={{
              paddingLeft: '12px',
              paddingRight: '12px',
              // paddingTop: 10,
            }}>
            <InputSearch
              placeholder='Search'
              searchValue={searchInputvalue}
              setSearchValue={setSearchInputvalue}
            />
          </Box>
          <Box style={{flex: 1}}>
            <div className='listStep'>
              <Typography>Study</Typography>
            </div>
            <div className='listStep'>
              <Typography>Genga</Typography>
            </div>
            <div className='listStep'>
              <Typography>Final</Typography>
            </div>
          </Box>

          <Box style={{flex: 1}}>
            <div className='listStep'>
              <Typography>Tags or checkbox</Typography>
            </div>
            <div className='listStep'>
              <Typography>Tags or checkbox</Typography>
            </div>
            <div className='listStep'>
              <Typography>Tags or checkbox</Typography>
            </div>
          </Box>
        </Drawer>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}>
          <div className='RootScreen'>
            <img src={screen} alt='screen' />
          </div>
        </Box>
      </Box>
      {/* <div className='RootHeader'>
        <div>Icon</div>
        <InputSearch
          placeholder='Search'
          searchValue={searchInputvalue}
          setSearchValue={setSearchInputvalue}
        />
      </div>
      <div className='RootContainer'>
        <div className='RootTag'>tags</div>
        <div className='RootScreen'>
          <img src={screen} alt='screen' />
        </div>
        <div className='RootStep'>setp</div>
      </div> */}
    </div>
  )
}

export default Root
