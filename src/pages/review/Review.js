import React from "react";

function Review({ reviews }) {
  const { caption, title, photo } = reviews;
  return (
    <div>
      <img src={photo} alt={caption} style={{ width: "100px" }} />
      {title}
    </div>
  );
}

export default Review;
