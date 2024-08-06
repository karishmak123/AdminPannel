import React from 'react';
import StarRatings from 'react-star-ratings';

const feedbackData = [
  {
    name: "Jenny Wilson",
    image: "/image/demo-image.jpg",
    rating: 4.5,
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Dianne Russell",
    image: "/image/demo-image.jpg",
    rating: 4.0,
    feedback: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2>Customer's Feedback</h2>
      {feedbackData.map((item, index) => (
        <div key={index} className="feedback">
          <img src={item.image} alt={item.name} />
          <span className="name">{item.name}</span>
          <div className="stars">
            <StarRatings
              rating={item.rating}
              starRatedColor="orange"
              numberOfStars={5}
              name='rating'
              starDimension="20px"
              isAggregate={true}
              isReadOnly={true}
            />
          </div>
          <p>{item.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
