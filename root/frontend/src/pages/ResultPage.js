import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ResultPage() {

    const{deckId, score} = useParams()
    const[cardCount, setCardCount] = useState(0)
    const[finalScore, setFinalScore] = useState(0)

    const getCount = async () =>{
        //picks a card to show
        //axios request to api for cards in database
        await axios.get(`${process.env.REACT_APP_API_ADDRESS}/api/decks/get-deck/${deckId}`, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
            console.log(res.data.cardsInDeck)
            setCardCount(res.data.cardsInDeck.length)
        })
      }

    const CalculateScore = async () =>{
        await setFinalScore((score/(cardCount/100)).toFixed(0))
    }

    useEffect(() => {
        getCount()
        CalculateScore()
    }, [])
  return (
    <div>
        {finalScore > 0 ? 
            <p>{`${finalScore}%`}</p>
        : null
        }
    </div>
  )
}
