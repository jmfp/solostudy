import React from 'react'

export default function StudyCard(props) {
  return (
    <div>
        {/*direction dictates if the front or back of the card is showing*/}
        {props.direction ? 
            <div>
                <p>{props.questionText}</p>
            </div>
        :
            <div>
                <p>{props.answerText}</p>
            </div>
        }
    </div>
  )
}
