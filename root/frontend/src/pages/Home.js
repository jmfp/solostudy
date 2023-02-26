import React from 'react'
import Image from '../components/Image'
import pic from '../images/pika.png'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header/>
      <Image className="hero-image" backgroundImage="f" image={pic}>
        <h1>Lets see if this text works the quick brown fox jumped over the lazy dog</h1>
      </Image>
      <div className='page-container'>
        <p style={{color: 'white'}}>Home</p>
      </div>
    </div>
    )
}
