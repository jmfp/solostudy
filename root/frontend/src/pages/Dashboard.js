import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Button from '../components/Button'
import DeckView from '../components/DeckView'

export default function Dashboard() {
  const [decks, setDecks] = useState([])  
  const [deck, setDeck] = useState({deckOwner: localStorage.getItem("userId"), deckName: 'test2', cardsInDeck: [{}]})

  const addDeck = async() =>{
    await axios.post("http://localhost:5000/api/decks/add-deck", deck).then(res =>{
      console.log(res.data)
    })
  }

  const GetDecks = async () =>{
    await axios.get(`http://localhost:5000/api/decks/get-decks/${localStorage.getItem("userId")}`).then(res =>{
      console.log(res.data)
      setDecks(res.data)
    })
  }

  useEffect(() => {
    GetDecks()
  }, [])
  
  
  return (
    <div className='page-container'>
      {decks.length > 0 ?
        decks.map(deck =>{
          return(
            <DeckView deckName={deck.deckName}/>
          )
        })
        :
        null
      }
        <Button className='round-button-static'>Add Deck</Button>
    </div>
  )
}
