import axios from 'axios'
import React, { useState } from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

export default function AddCard() {
  const [card, setCard] = useState({front: 'whats 2+2', back: '4'})

  const addCard = async()=>{
    //await axios.post('http://localhost:5000/api/cards/add-card', card, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
    //    console.log(res.data)
    //})
    await axios.post(`${process.env.API_ADDRESS}/api/cards/add-card`, card, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
        console.log(res.data)
    })
  }

  const addQuestion = (question) =>{
    setCard({...card, front: question})
  }

  return (
    <div className='page-container'>
        <TextInput placeholder='front' onChange={(e) => addQuestion(e.target.value)}/>
        <Button className='round-button-static' onClick={addCard}>Add Card</Button>
    </div>
  )
}
