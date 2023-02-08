import React, {useEffect, useState} from 'react'
import {json, useParams} from 'react-router-dom'
import axios from 'axios'
import CardView from '../components/CardView'
import { FaPlusCircle } from 'react-icons/fa'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import {useNavigate} from 'react-router-dom'

export default function DeckEdit() {
    const [cards, setCards] = useState()
    const [deck, setDeck] = useState()
    const [newCard, setNewCard] = useState({deck: useParams('deckId').deckId, front: '', back: ''})
    let {deckId} = useParams()

    const navigate = useNavigate()
    const Study = () =>{
      navigate(`/quiz/${deckId}`)
    }
    const DeleteCard = async(cardToDelete) =>{
        await axios.delete(`http://localhost:5000/api/cards/delete-card`, {data: {deck: deck, card: cardToDelete}}).then(res =>{
            console.log(res.data)
        })
        GetDeck()
    }

    const AddCard = async () =>{
        await axios.post(`http://localhost:5000/api/cards/add-card`, newCard, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
            console.log(res.data)
            setCards([...cards, res.data])
        })
        GetDeck()
    }

    const GetDeck = async () =>{
        await axios.get(`http://localhost:5000/api/decks/get-deck/${deckId}`).then(res =>{
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
        <div className='outline-container-rounded'>
        <h1>Add New Card</h1>
        <TextInput className="input-field" placeholder='New Card Front' onChange={(e) => setNewCard({...newCard, front: e.target.value})}/>
        <TextInput className="input-field" placeholder='New Card Back' onChange={(e) => setNewCard({...newCard, back: e.target.value})}/>
        <div className='bottom-menu'>
          <FaPlusCircle onClick={AddCard} />
          <Button className='round-button-static' text='Study' onClick={Study}/>
        </div>
      </div>
    </div>
  )
}
