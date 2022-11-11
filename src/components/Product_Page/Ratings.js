import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./Rating.css";

export default function Ratings() {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => {
    setValue(value);
    console.log(value, index);
  };

  console.log("VALUEEEEE", value);

  return (
    <div className="rating_star_div">
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
      />
      &nbsp;
      <div className="rating_text_div">
        {value === 1 && <p>Poor</p>}
        {value === 2 && <p>Fair</p>}
        {value === 3 && <p>Good</p>}
        {value === 4 && <p>Excellent</p>}
        {value === 5 && <p>WOW!!!</p>}
      </div>
    </div>
  );
}
