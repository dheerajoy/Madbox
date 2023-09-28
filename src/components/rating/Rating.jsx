import React from 'react';
import RatingCard from './RatingCard';
import '../rating/rating.scss'

import ratingpic from '../rating/ratingstars.png';

const Rating = () => {
  return (
    <div className='ratingCon'>
        <div className='line'>
            <hr></hr>
        </div>
        <section>
        <div className="ratingTexts">
            <p id='TOP'>Our ratings on <span>glassdoor</span></p>
            <div>
                <p>Transparency builds trust and that is why we encourage everyone to share their experiences at Madbox.</p>
            </div>
        </div>
        <div className="ratingStarsimg">
            <img id='ratingPic' src={ratingpic} alt='pic'/>
        </div>
        </section>
      <div className='RatingCard'>
        <RatingCard rating={4.9} description="Culture & Values"  gradientColors={['#00C2FF', '#4FF29F']} />
        <RatingCard rating={4.7} description="Diversity & Inclusion"  gradientColors={['#AB03FF', '#38B7FF']}/>
        <RatingCard rating={4.5} description="Work/Life Balance"  gradientColors={['#FF596F', '#FFBF05']}/>
        <RatingCard rating={4.6} description="Senior Leadership"  gradientColors={['#FD549A', '#8E74FF']}/>
        <RatingCard rating={4.4} description="Career Opportunities"  gradientColors={['#FF7326','#FF4DC6']}/>
      </div>
    </div>
  );
};


export default Rating;