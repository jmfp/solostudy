import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function DeckView(props) {
  const navigate = useNavigate()
  const ViewDeck = () =>{
    navigate(`/deck/${props.deckId}`)
  }
  return (
    <div className='deck-container' onClick={ViewDeck}>
        <p>{props.deckName}</p>
    </div>
  )
}
