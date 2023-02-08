import React, {useEffect, useState} from 'react'
import CardView from '../components/CardView'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function QuizPage() {

  const [cardCount, setCardCount] = useState(0)
  const [cardsInDeck, setCardsInDeck] = useState([{front: '', back: ''}])
  const [flipped, setFlipped] = useState(false)
  const [finished, setFinished] = useState(false)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  let {deckId} = useParams()

  useEffect(() => {
    ShowCard()
  }, [])

  const CalculateScore = () =>{
    setScore((100 * score / (cardCount)).toFixed(2))
  }

  const ShowCard = async () =>{
    //picks a card to show
    //axios request to api for cards in database
    await axios.get(`http://localhost:5000/api/decks/get-deck/${deckId}`).then(res =>{
        console.log(res.data.cardsInDeck)
        setCardsInDeck(res.data.cardsInDeck)
        setCardCount(res.data.cardsInDeck.length)
    })
  }

  const FlipCard = () =>{
    //shows back of current card
    setFlipped(true)
  }

  const CheckAnswer = (isCorrect) =>{
    //checks if the user was right about the card
    if(isCorrect){
      setScore(score+1)
    }
    //checking if the cards are in bounds
    if(index < cardsInDeck.length -1){
      setIndex(index+1)
      setFlipped(false)
    }
    //if it's the last card display results after the card is answered
    else{
      setFinished(true)
      CalculateScore()
    }
    console.log(index)
    
  }

  return (
    <div className='page-container'>
      {!finished ? 
        <CardView
          frontText={cardsInDeck[index].front}
          backText={cardsInDeck[index].back}
          flipped={flipped}
          flipFunction={FlipCard}
          correctFunction={() => CheckAnswer(true)}
          incorrectFunction={() => CheckAnswer(false)}
          currentCard={index + 1}
          totalCards={cardCount}
        />
      :
        <div className='large-container-primary'>
          <p>{score}%</p>
        </div>
      }
    </div>
  )
}
