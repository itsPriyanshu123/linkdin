import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
function Sidebar() {
    function recentItems(topic){
    return(
        <div className='sidebar_recentItem'>
            <span className='recent_hash'>#</span>
            <p>{topic}</p>
            </div>
    )
    }
    return (
        <div className='sidebar'>
            <div className='sidebar__Top'>
                <img src="https://images.unsplash.com/photo-1685287417745-0ed40cb5b3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt='background_img' />
                <Avatar className='sidebar_avatar' />
                <h2>Priyanshu</h2>
                <h3>Developer</h3>
            </div>
            <div className='sidebar_States'>
                <div className='sidebar__State'>
                    <p>Who viewed You</p>
                    <p className='sidebar__Number'>2433</p>
                </div>
                <div className='sidebar__State'>
                    <p>views on Post</p>
                    <p className='sidebar__Number'>2433</p>
                </div>
            </div>
            <div className='sidebar_bottom'>Recent
            {recentItems("react js")}
            {recentItems("frontend development")}
            {recentItems("javascript")}
            {recentItems("problem solving")}
            </div>
        </div>
    )
}

export default Sidebar