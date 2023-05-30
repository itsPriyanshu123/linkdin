import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
function Feed() {
  return (
    <div className='feed'>
<div className='feedInput_Container'>
    <div className='feedInput'>
        <CreateIcon/>
        <form>
            <input type='text' placeholder='Add a post'/>
            <button type='submit'>Send</button>
        </form>
    </div>
</div>
    </div>
  )
}

export default Feed