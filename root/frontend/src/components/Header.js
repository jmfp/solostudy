import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {RiDashboard3Fill, RiUser3Fill} from 'react-icons/ri'
import Button from './Button'
import Modal from './Modal'

export default function Header() {
  const [modal, setModal] = useState(false)

  const logOut = async () =>{
    localStorage.clear()
    GoHome()
  }
  const navigate = useNavigate()
  const GoHome = () =>{
    navigate(`/`)
  }
  const logIn = () =>{
    //setModal(true)
    navigate(`/login`)
  }
  return (
    <header className='header' style={{textDecoration: 'none'}}>
      {modal ? 
          <Modal>
            <Button text='x' className='round-button-static' onClick={() => setModal(false)}/>
          </Modal>
        :
        null
      }
      <Link to='/' style={{textDecoration: "none"}}>Home</Link>
      {localStorage.getItem("authStatus") ? 

        <Link to='/dashboard' style={{textDecoration: "none"}}>
          <RiDashboard3Fill/>
        </Link>
      : 
        null
      }
      {localStorage.getItem("authStatus") ? 
        <Button onClick={logOut} className='round-button-menu' style={{textDecoration: "none"}} text='Logout 😢'/>
        :
        <Button onClick={logIn} className='round-button-menu' style={{textDecoration: "none"}} text='Login'/>
      }
    </header>
  )
}
