import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import "../styles/RatingComponent.css";

const RatingComponent = () => {
  const [currentStarRating, setCurrentStarRating] = useState(0);
  const [hoverStarRating, setHoverStarRating] = useState(undefined);

  const [feedback, setFeedback] = useState("");

  const stars = [1, 2, 3, 4, 5];

  const onClickHandler = (value) => {
    setCurrentStarRating(value);
  };

  const onMouseOverHandler = (value) => {
    setHoverStarRating(value);
  };

  const onMouseLeaveHandler = () => {
    setHoverStarRating(undefined);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(currentStarRating, feedback);
  };

  return (
    <div className="ratingContainer">
      <h1>Share Your Experience</h1>
      <div className="starsSection">
        {stars.map((el, index) => {
          return (
            <BsFillStarFill
              key={index}
              size={34}
              color={
                (hoverStarRating || currentStarRating) > index
                  ? "orange"
                  : "gray"
              }
              onClick={() => onClickHandler(index + 1)}
              onMouseOver={() => onMouseOverHandler(index + 1)}
              onMouseLeave={onMouseLeaveHandler}
            />
          );
        })}
      </div>
      <div className="feedbackContainer">
        <textarea
          cols="60"
          rows="10"
          maxLength="150"
          spellCheck={"false"}
          value={feedback}
          placeholder="Write Your Experience"
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" onClick={onSubmitHandler} className="submitBtn">
        Submit
      </button>
    </div>
  );
};

export default RatingComponent;
