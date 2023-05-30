import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
function HeaderOption({ avatar,title, Icon }) {
  return (
    <div className='header__Option'>
      {
        Icon && <Icon className='headerOption__Icon' />
      }
      {
        avatar &&
          <Avatar className='headerOption__Avtar' src={avatar} />
        
      }
      <h3 className='headerOption__Title'>{title}</h3>
    </div>
  )
}

export default HeaderOption