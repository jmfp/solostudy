import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {CiTrash, CiEdit} from 'react-icons/ci'

export default function DeckView(props) {
  const navigate = useNavigate()
  const ViewDeck = () =>{
    navigate(`/deck/${props.deckId}`)
  }

  return (
      <div className='deck-container'>
        <p>{props.deckName}</p>
        <div className='delete-button-container'>
          <div className='delete-button' onClick={() => props.deleteDeck(props.deckId)}>
            <CiTrash className='card-image' />
          </div>
          <div className='delete-button' onClick={ViewDeck}>
            <CiEdit/>
          </div>
        </div>
      </div>
  )
}
