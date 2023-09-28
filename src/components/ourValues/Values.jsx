import React from 'react'
import '../ourValues/values.scss'

import first from './Values/first.avif'
import second from './Values/second.avif'
import third from './Values/third.avif'
import fourth from './Values/fourth.avif'

const Values = () => {
  return (
    <div className='values'>

        <div className="firstcontent">
            <div data-aos="fade-up" data-aos-duration="700" className="leftText">
                <h1 id='first_h1'>Explore<br/>
                Together.</h1>
                <p>Game making is about exploration and facing uncertainty, together. High ambitions require humility about what we don’t know. That is why we have created an environment where our talents constantly support each other and where passion & learnings are shared.</p>
            </div>
                <div data-aos="zoom-in" data-aos-duration="900" className='valuesPics'>
                    <img src={first} className='rightValue' />
                </div>
            
        </div>

        <div className="secondcontent">
           
                <div data-aos="zoom-in" data-aos-duration="900" className='valuesPics'>
                    <img  src={second} className='leftValue'/>
                </div>
                <div data-aos="fade-up" data-aos-duration="1100"  className='rightText'>
                    <h1 id='second_h1'>Learn Fast.</h1>
                    <p>Assessing our ideas through high-speed testing, and receiving feedback as fast and often as we can is paramount at Madbox. Quick failure and iteration is always preferred to long-drawn-out discussions.</p>
                </div>
            
        </div>

        <div className="thirdcontent">
            <div data-aos="fade-up" data-aos-duration="1100"  className="leftText">
                <h1 id='third_h1'>Be <br/>
                Thoughtfully<br/>
                Candid.</h1>
                <p>At Madbox, anything should be said as long as it is thoughtfully shared. We believe that the delivery of feedback is as equally important as the message itself. This is our way to build a transparent culture, where everyone participates in both the celebrations and challenges of building a company together.</p>
                </div> 
            <div data-aos="zoom-in" data-aos-duration="1300" className='valuesPics'>
                <img src={third}  className='rightValue'/>
            </div>
        </div>

        <div className="fourthcontent">
            <div data-aos="zoom-in" data-aos-duration="1300" className='valuesPics'>
                <img src={fourth} className='leftValue' />
            </div>  
            <div data-aos="fade-up" data-aos-duration="1500"  className='rightText'>
                <h1 id='fourth_h1'>Shape <br/>(y)our <br/>Journey.</h1>
                <p>We expect each Madboxers to shape their own journey, fully supported by a culture of complete ownership in decision making based on accountability and trust. This aims to allow everyone to learn, grow and write the next chapters in our Mad Story.</p>
            </div> 
        </div>


    </div>
  )
}

export default Values