import React from "react";
import TipRank from "./TipRank";
import ReviewRank from "./ReviewRank";
import UserRank from "./UserRank";
import Recommend from "./Recommend";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Rank: {
    display: "flex",
    justifyContent: "center",
    columnGap: "20%",
  },
  Rec: {
    display: "flex",
    justifyContent: "center",
    columnGap: "15px",
    width: "80%",
    margin: "auto",
  },
  text: {
    display: "flex",
    width: "fit-content",
    justifyContent: "center",
    margin: "auto",
    borderBottom: "2px solid currentColor",
  },
}));

const recData = [
  ["상품", "상품설명입니다.", 5, 10],
  ["상품2", "상품설명입니다2", 10, 20],
  ["상품3", "상품설명입니다3", 20, 30],
];

function Home() {
  const classes = useStyles();
  //추천 상품
  const recList = recData.map((rec, index) => (
    <Recommend
      title={rec[0]}
      content={rec[1]}
      like={rec[2]}
      comment={rec[3]}
      key={index}
    />
  ));

  return (
    <div>
      <div className={classes.Rank}>
        {/* 리뷰 */}
        <ReviewRank/>
        {/* 꿀팁 */}
        <TipRank/>
        {/* 유저 */}
        <UserRank/>
      </div>
      <br /> <br />
      <h2 className={classes.text}>우리의 추천상품</h2>
      <br />
      {/* recList를 mapping하여 가져옴 */}
      <div className={classes.Rec}>{recList}</div>
    </div>
  );
}

export default Home;
