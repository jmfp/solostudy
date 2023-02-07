import React from 'react'
import axios from 'axios'
import Image from '../components/Image'
import pic from '../images/pika.png'
import Header from '../components/Header'

export default function Home() {


  const testApi = async() =>{
    await axios.get("http://localhost:5000/api/products/add-product").then(res =>{
      console.log(res.data)
    })
  }

  return (
    <div>
      
      <Image className="hero-image" backgroundImage="f" image={pic}>
      <Header/>
        <h1>Lets see if this text works the quick brown fox jumped over the lazy dog</h1>
      </Image>
      <div className='page-container'>
          <p>Home</p>
          <button onClick={testApi}>Click</button>
      </div>
    </div>
    )
}
