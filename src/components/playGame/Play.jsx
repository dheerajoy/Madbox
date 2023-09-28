import React from 'react'
import '../playGame/play.scss'

import image from './MicrosoftTeams-image.png'

const Play = () => {
  return (
    <div className="play">
        <div className='img'>
          <img src={image} alt='pic'/>
        </div>
    </div>
  )
}

export default Play