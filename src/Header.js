import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
    return (
        <div className='header'>

            <div className='left_Header'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className='search_Bar'>
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>

            <div className='right_Header'>
            <HeaderOption  title='Home' Icon={HomeIcon}/>
            <HeaderOption  title='My Network' Icon={SupervisorAccountIcon}/>
            <HeaderOption  title='Jobs' Icon={BusinessCenterIcon}/>
            <HeaderOption  title='Messaging' Icon={ChatIcon}/>
            <HeaderOption  title='Notification' Icon={NotificationsIcon}/>
            <HeaderOption avtar="https://st4.depositphotos.com/28924620/31393/i/600/depositphotos_313930348-stock-photo-osaka-japan-jul-2019-close.jpg"/>
            </div>
        </div>
    )
}

export default Header;