import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Button from '../components/Button'
import DeckView from '../components/DeckView'
import Header from '../components/Header'
import Modal from '../components/Modal'
import TextInput from '../components/TextInput'
import { AnimatePresence } from 'framer-motion'

export default function Dashboard() {
  const [decks, setDecks] = useState([])  
  const [deck, setDeck] = useState({deckOwner: localStorage.getItem("userId"), deckName: '', cardsInDeck: [{}]})
  const [modal, setModal] = useState(false)

  const addDeck = async() =>{
    await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/decks/add-deck`, deck, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
      console.log(res.data)
    })
    setModal(false)
    GetDecks()
  }

  const GetDecks = async () =>{
    //await axios.get(`http://localhost:5000/api/decks/get-decks/${localStorage.getItem("userId")}`, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
    //  console.log(res.data)
    //  setDecks(res.data)
    //})
    await axios.get(`${process.env.REACT_APP_API_ADDRESS}/api/decks/get-decks/${localStorage.getItem("userId")}`, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
      console.log(res.data)
      setDecks(res.data)
    })
  }

  useEffect(() => {
    GetDecks()
  }, [])
  
  
  return (
    <div>
    <div className='page-container'>
      <Header/>
      <div className='scroll-container'>
        {decks.length > 0 ?
          decks.map(deck =>{
            return(
              <DeckView deckName={deck.deckName} deckId={deck._id} setDeck={() => setDeck}/>
            )
          })
          :
          null
        }
      </div>
        <AnimatePresence initial={false}>
          {modal && <Modal handleClose={() => setModal(false)}>
              <TextInput className="input-field" placeholder="Deck Name" onChange={(e) => setDeck({...deck, deckName: e.target.value})}/>
              <div className='modal-button'>
                <Button className="round-button-static" onClick={addDeck} text="+"/>
                <Button className='round-button-static' onClick={() => setModal(false)} text="x"/>
              </div>
            </Modal>}
        </AnimatePresence>
        <div className='footer-container'>
          <Button className='round-button-menu' onClick={() => setModal(!modal)} text='+'/>
        </div>
    </div>
    </div>
  )
}
