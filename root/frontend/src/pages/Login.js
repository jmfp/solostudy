import React, {useState} from 'react'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'

export default function Login() {
  const navigate = useNavigate()
  const [signingUp, setSigningUp] = useState(false)
  const [auth, setAuth] = useState(false)
  const [formData, setFormData] = useState({email: '', password: ''})

  const login = () =>{
    axios.post("http://localhost:5000/api/users/login", formData).then(res =>{
      console.log(res.data)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("userObj", res.data.user)
      localStorage.setItem("authStatus", res.data.auth)
      localStorage.setItem("userId", res.data.user._id)
      setAuth(res.data.auth)
      navigate('/')
    })
  }

  const register = () =>{
    axios.post("http://localhost:5000/api/users/add-user", formData).then(res =>{
      console.log(res.data)
    })
  }

  return (
    <div className='page-container'>
        {signingUp ? 
        <div className='outline-container-rounded'>
          <h1>Sign Up</h1>
          <TextInput type='email' placeholder="E-Mail" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          <TextInput type='password' placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})}/>
          <TextInput type='password' placeholder="Password"/>
          <Button className='round-button-static' text="Sign Up" onClick={() => register()}/>
          <Button className='simple-text-button' onClick={() => setSigningUp(false)}>Log In</Button>
        </div>
        : 
        <div className='outline-container-rounded'>
          <h1>Log In</h1>
          <TextInput type='email' placeholder="E-Mail" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          <TextInput type='password' placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})}/>
          <Button className='round-button-static' text="Log In" onClick={login}/>
          <Button className='simple-text-button' onClick={() => setSigningUp(true)}>Sign Up</Button>
        </div>
        }
    </div>
  )
}
