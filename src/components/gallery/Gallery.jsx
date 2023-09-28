import React from 'react'
import '../gallery/gallery.scss'

import pic1 from '../gallery/photos/1.avif'
import vid2 from '../gallery/photos/2.mp4'
import pic3 from '../gallery/photos/3.avif'
import pic4 from '../gallery/photos/4.avif'
import pic5 from '../gallery/photos/5.avif'


const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="firstrow">
            <div >
                <img id="pic1" src={pic1}/>
            </div>
            <div className="video-container" >
                <video src={vid2} id="galleryvideo" type="video.mp4" controls={true} autoPlay loop />
            </div>
        </div>
        <div className="secondrow">
            <img className='secondRowPics' src={pic3}/>
            <img className='secondRowPics' src={pic4}/>
            <img className='secondRowPics' src={pic5}/>
        </div>
    </div>
  )
}

export default Gallery