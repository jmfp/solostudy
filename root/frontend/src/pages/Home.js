import React, {useState} from 'react'
import axios from 'axios'
import Image from '../components/Image'
import pic from '../images/pika.png'
import Header from '../components/Header'
import Button from '../components/Button'

export default function Home() {
  const [deck, setDeck] = useState({deckOwner: localStorage.getItem("userId"), deckName: 'test2', cardsInDeck: [{}]})

  const addDeck = async() =>{
    await axios.post("http://localhost:5000/api/decks/add-deck", deck).then(res =>{
      console.log(res.data)
    })
  }

  return (
    <div>
      <Header/>
      <Image className="hero-image" backgroundImage="f" image={pic}>
        <h1>Lets see if this text works the quick brown fox jumped over the lazy dog</h1>
      </Image>
      <div className='page-container'>
          <p>Home</p>
          <Button className='round-button-static' onClick={addDeck}>Click</Button>
      </div>
    </div>
    )
}
