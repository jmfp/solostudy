import React from 'react'

export default function DeckView(props) {
  return (
    <div className='deck-container'>
        <p>{props.deckName}</p>
    </div>
  )
}
