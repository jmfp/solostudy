import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {CiTrash} from 'react-icons/ci'

export default function DeckView(props) {
  const navigate = useNavigate()
  const ViewDeck = () =>{
    navigate(`/deck/${props.deckId}`)
  }

  const deleteDeck = async()=>{
    await axios.delete('http://localhost:5000/api/decks/delete-deck', {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}, params: {id: props.deckId}}).then(res =>{
      console.log(res.data)
    })
    await axios.get(`http://localhost:5000/api/decks/get-decks/${localStorage.getItem("userId")}`, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
      console.log(res.data)
      props.setDecks(res.data)
    })
  }

  return (
      <div className='deck-container' onClick={ViewDeck}>
        <p>{props.deckName}</p>
        <div>
          <CiTrash className='card-image' onClick={deleteDeck}/>
        </div>
      </div>
  )
}
