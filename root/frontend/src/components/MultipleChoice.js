import React from 'react'

export default function MultipleChoice(props) {
  return (
    <div className='multiple-choice-container'>
        {props.choices ?
        props.choices.map(choice =>{
          return(
            <div className='multiple-choice'>
              <input type="radio" id={choice.name} value={choice.name}/>
              <label for={choice.name}>{choice.name}</label><br/>
            </div>
          )
        })
        : null}
    </div>
  )
}
