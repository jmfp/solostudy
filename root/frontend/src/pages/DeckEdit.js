import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import CardView from '../components/CardView'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { AnimatePresence } from 'framer-motion'

export default function DeckEdit() {
    const [cards, setCards] = useState()
    const [deck, setDeck] = useState()
    const [newCard, setNewCard] = useState({deck: useParams('deckId').deckId, front: '', back: ''})
    const [modal, setModal] = useState(false)
    let {deckId} = useParams()

    const navigate = useNavigate()
    const Study = () =>{
      if(cards.length > 0){
        navigate(`/quiz/${deckId}`)
      }
    }
    const DeleteCard = async(cardToDelete) =>{
        await axios.delete(`${process.env.REACT_APP_API_ADDRESS}/api/cards/delete-card`, {data: {deck: deck, card: cardToDelete}, headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
            console.log(res.data)
        })
        GetDeck()
    }

    const AddCard = async () =>{
        await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/cards/add-card`, newCard, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
            console.log(res.data)
            setCards([...cards, res.data])
        })
        GetDeck()
        if(modal){
          setModal(false)
        }
    }

    const GetDeck = async () =>{
        await axios.get(`${process.env.REACT_APP_API_ADDRESS}/api/decks/get-deck/${deckId}`, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
            console.log(res.data)
            setCards(res.data.cardsInDeck)
            setDeck(res.data)
        })
    }

    useEffect(() =>{
        GetDeck()
    }, [])

  return (
    <div className='page-container'>
        <Header/>
        <div className='scroll-container'>
            {!cards ? null :
                cards.map((card, index) =>{
                    return(
                      <CardView
                       frontText={card.front}
                       onDelete={() => DeleteCard(card)}
                      />
                    )
                })
            }
        </div>
        <AnimatePresence initial={false}>
          {modal && <Modal handleClose={() => setModal(false)}>
            <TextInput className="input-field" placeholder="Front" onChange={(e) => setNewCard({...newCard, front: e.target.value})}/>
            <TextInput className="input-field" placeholder='New Card Back' onChange={(e) => setNewCard({...newCard, back: e.target.value})}/>
            <div className='modal-button'>
              <Button className="round-button-static" onClick={AddCard} text="Add Card"/>
              <Button className='round-button-static' onClick={() => setModal(false)} text="Cancel"/>
            </div>
          </Modal>}
        </AnimatePresence>
        <div className='footer-container'>
          <Button className='round-button-menu' onClick={() => setModal(!modal)} text='+'/>
          <Button className='round-button-menu' text='Study' onClick={Study}/>
        </div>
    </div>
  )
}
