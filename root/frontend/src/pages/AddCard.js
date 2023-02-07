import axios from 'axios'
import React, { useState } from 'react'
import Button from '../components/Button'

export default function AddCard() {
  const [card, setCard] = useState({front: 'whats 2+2', back: '4'})

  const addCard = async()=>{
    await axios.post('http://localhost:5000/api/cards/add-card', card).then(res =>{
        console.log(res.data)
    })
  }

  return (
    <div>
        <Button className='round-button-static' onClick={addCard}>Add Card</Button>
    </div>
  )
}
