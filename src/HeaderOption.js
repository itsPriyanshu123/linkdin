import React from 'react'
import './HeaderOption.css'
function HeaderOption({ avatar,title, Icon }) {
  return (
    <div className='header__Option'>
      {
        Icon && <Icon className='headerOption__Icon' />
      }
      {
        avatar &&
          <avatar className='headerOption__Avtar' src={avatar} />
        
      }
      <h3 className='headerOption__Title'>{title}</h3>
    </div>
  )
}

export default HeaderOption