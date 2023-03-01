import React from 'react'

export default function CircleStat(props) {
  return (
    <div className='block-holder'>
        <p className='value'>{props.value}</p>
        <div className='fill-area'>
            <div style={{height: '100%', width: `${props.value.toString()}%`, backgroundColor: '#09E85E', borderRadius: '16px'}}>

            </div>
        </div>
    </div>
  )
}
