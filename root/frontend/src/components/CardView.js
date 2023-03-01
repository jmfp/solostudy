import React from 'react'
import {CiTrash} from 'react-icons/ci'
import Button from './Button'

export default function CardView(props) {
    //this is the view of the card when actually using it to quiz yourself
  return (
    <div className='item-card-container'>
        {!props.flipped ? 
            <div className='study-card'>
                <p>{props.frontText}</p>
                {!props.flipFunction ? null : 
                    <Button className='round-button-menu' onClick={props.flipFunction} text='Flip'/>
                }
            </div>
            
        : 
            <div className='study-card'>
                <p>{props.backText}</p>
                <div className="medium-container">
                    <Button className='round-button-static' text='Correct' onClick={props.correctFunction}/>
                    <Button className='round-button-static' text='Wrong' onClick={props.incorrectFunction}/>
                </div>
            </div>
        }
        <div className='service-container-3'>

            {!props.flipFunction ? 
            <div className='delete-button-container'>
                <div onClick={props.onDelete}>
                    <CiTrash/>
                </div>
            </div>
            : 
                <div>
                    {props.currentCard} / {props.totalCards}
                </div>
            }
            
        </div>
    </div>
  )
}
