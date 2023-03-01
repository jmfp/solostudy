import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Image from '../components/Image'
import pic from '../images/blob.svg'
import MultipleChoice from '../components/MultipleChoice'

export default function Home() {
  const[answers, setAnswers] = useState([{name: "Python", isCorrect: true}, {name: "JS", isCorrect: false}], {name: "HTML", isCorrect: false})
  const navigate = useNavigate()
  const login = () =>{
    if(localStorage.getItem('authStatus')){
      navigate('/dashboard')
    }else{
      navigate('/login')
    }
  }
  return (
    <div>
      <Header/>
      <Image className="hero-image" backgroundImage="f" image={pic}>
        <h1>Learn faster with SoloStudy</h1>
        <Button className='fun-button' text={localStorage.getItem('authStatus') ? 'Start Learning' : 'Sign Up'} onClick={login}/>
      </Image>
      <div className='page-container'>
        {/*<MultipleChoice choices={answers}/>*/}
        <div className='outline-container-rounded-horizontal'>
          <div className='info-container'>
            <p>SoloStudy allows you to learn the things you're interested in at your own pace</p>
            <Button className='fun-button' onClick={login} text={localStorage.getItem('authStatus') ? 'Start Learning' : 'Sign Up'}/>
          </div>
          <div className='shape-container'>
            <div className='liquid-shape'/>
          </div>
        </div>
      </div>
    </div>
    )
}
