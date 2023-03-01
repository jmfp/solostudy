import React, {useEffect, useState} from 'react'
import CardView from '../components/CardView'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import CircleStat from '../components/CircleStat'
import Button from '../components/Button'

export default function QuizPage() {

  const [cardCount, setCardCount] = useState(0)
  const [cardsInDeck, setCardsInDeck] = useState([{front: '', back: ''}])
  const [flipped, setFlipped] = useState(false)
  const [finished, setFinished] = useState(false)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [percentScore, setPercentScore] = useState(0)
  const navigate = useNavigate()
  let {deckId} = useParams()
  let total = 0;

  useEffect(() => {
    ShowCard()
  }, [])

  const CalculateScore = async () =>{
    //setScore((100 * score / (cardCount - 1)).toFixed(2))
    //console.log(`Score ${score}`)
    //console.log(`CardCount ${cardCount}`)
    //
    //setScore((score/(cardCount/100)).toFixed(0))
    setFinished(true)
    console.log((score/(cardCount/100)).toFixed(0))
  }

  const reset = ()=>{
    setIndex(0)
    setFinished(false)
    setScore(0)
  }

  const ShowCard = async () =>{
    //picks a card to show
    //axios request to api for cards in database
    await axios.get(`${process.env.REACT_APP_API_ADDRESS}/api/decks/get-deck/${deckId}`, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
        console.log(res.data.cardsInDeck)
        setCardsInDeck(res.data.cardsInDeck)
        setCardCount(res.data.cardsInDeck.length)
        console.log(res.data.cardsInDeck.length)
    })
  }

  const FlipCard = () =>{
    //shows back of current card
    setFlipped(true)
  }

  const correctAnswer = async () =>{
    if(index < cardCount - 1){
      setScore(score+1)
      setIndex(index+1)
      setFlipped(false)
    }else{
      setScore(score+1)
      //setFinished(true)
      setFlipped(false)
      //finish()
      await CalculateScore()
    }
    console.log(`new score is ${score} ${finished}`)
  }

  const incorrectAnswer = async () =>{
    if(index < cardCount - 1){
      //setScore(score+1)
      setIndex(index+1)
      setFlipped(false)
    }else{
      //setFinished(true)
      setFlipped(false)
      //finish()
      await CalculateScore()
    }
    console.log(`new score is ${score}`)
  }

  return (
    <div className='page-container'>
      <Header/>
      {!finished ? 
        <CardView
          frontText={cardsInDeck[index].front}
          backText={cardsInDeck[index].back}
          flipped={flipped}
          flipFunction={FlipCard}
          correctFunction={correctAnswer}
          incorrectFunction={incorrectAnswer}
          currentCard={index + 1}
          totalCards={cardCount}
        />
      :
        <div className='large-container'>
          <h1>{`Your Score!`}</h1>
          <CircleStat value={`${(score/(cardCount/100)).toFixed(0)}%`}/>
          <Button className='fun-button' text='Retry' onClick={reset}/>
        </div>
      }
    </div>
  )
}
