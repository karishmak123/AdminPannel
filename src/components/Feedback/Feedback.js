import React from 'react';
import StarRatings from 'react-star-ratings';

const feedbackData = [
  {
    name: "Jenny Wilson",
    image: "/image/demo-image.jpg",
    rating: 4.5,
    feedback: "The food was excellent and so was the service, I had the mushroom risotto with scallops which was awesome, I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
  },
  {
    name: "Dianne Russell",
    image: "/image/demo-image.jpg",
    rating: 4.0,
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
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
