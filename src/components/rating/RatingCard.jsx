import React from 'react';


const RatingCard = ({ rating, description, gradientColors}) => {
  const gradientId = `gradient-${rating}`;

  
  return (
    <div className="card-container">
      <div className="rating-container">
        <svg className="rating-circle">
            <defs>
            <linearGradient id={gradientId}>
              {gradientColors.map((color, index) => (
                <stop key={index} offset={`${(index * 100) / (gradientColors.length - 1)}%`} stopColor={color} />
              ))}
            </linearGradient>
            </defs>
          <circle
            className="circle-path"
            cx="60"
            cy="60"
            r="50"
            stroke={`url(#${gradientId})`}
            strokeDasharray={`${(rating / 5) * 310}px, 310px`}
          />
        </svg>
        <div className="rating-text">
          {rating}
        </div>

        <div className="description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
