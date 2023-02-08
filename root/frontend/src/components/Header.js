import React from 'react'
import {Link} from 'react-router-dom'
import {RiDashboard3Fill} from 'react-icons/ri'

export default function Header() {
  return (
    <header className='header-invis'>
        <div className='logo-container'>
            <Link to='/' style={{textDecoration: "none"}}>Home</Link>
        </div>
        <div>
            <Link to='/dashboard' style={{textDecoration: "none"}}>
              <RiDashboard3Fill/>
            </Link>
        </div>
    </header>
  )
}
