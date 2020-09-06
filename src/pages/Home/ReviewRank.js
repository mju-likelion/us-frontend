import React ,{useState, useEffect} from "react";
import axios from 'axios';

function ReviewRank() {
  const [reviewsTitle, setReviewsTitle] = useState([]);

  useEffect(() => {
    let completed = false;

    async function get(){
      const result = await axios.get(
        "http://127.0.0.1:8000/board/review"
      );
      if (!completed) setReviewsTitle(result.data);
    }
    get();
    return () => {
      completed =true;
    };
  })
  const reviewList = reviewsTitle.map((title)=> title.board_title);
  
  return (
    <div>
      <h3>실시간 인기 리뷰</h3>
      <p>
        <img src={require("./1등.svg")} alt="1등 왕관 이미지" /> {reviewList.slice(0,1)}
      </p>
      <p>
        <img src={require("./2등.svg")} alt="2등 왕관 이미지" /> {reviewList.slice(1,2)}
      </p>
      <p>
        <img src={require("./3등.svg")} alt="3등 왕관 이미지" /> {reviewList.slice(-1)}
      </p>
    </div>
  );
}

export default ReviewRank;
