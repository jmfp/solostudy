import React from 'react'
import { BsFillCheckCircleFill  } from 'react-icons/bs'
import { MdCancel  } from 'react-icons/md'
import {FcFullTrash} from 'react-icons/fc'
import Button from './Button'

export default function CardView(props) {
    //this is the view of the card when actually using it to quiz yourself
  return (
    <div className='item-card-container'>
        {!props.flipped ? 
            <div>
                <p>{props.frontText}</p>
                <div className="medium-container">
                    {!props.flipFunction ? null : 
                        <button className='cornered-button-static' onClick={props.flipFunction}>
                            flip card
                        </button>
                    }
                </div>
            </div>
            
        : 
            <div>
                <p>{props.backText}</p>
                <div className="medium-container">
                    <Button className='round-button-static' text='Correct' onClick={props.correctFunction}/>
                    <Button className='round-button-static' text='Wrong' onClick={props.incorrectFunction}/>
                </div>
            </div>
        }
        <div className='service-container-3'>

            {!props.flipFunction ? 
            <div onClick={props.onDelete}>
                <FcFullTrash/>
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
