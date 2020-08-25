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

const reviewRankData = [["review1", "review2", "review3"]];

const tipRankData = [["tip1", "tip2", "tip3"]];

const userRankData = [["user1", "user2", "user3"]];

function Home() {
  const classes = useStyles();

  const recList = recData.map((rec) => (
    <Recommend title={rec[0]} content={rec[1]} like={rec[2]} comment={rec[3]} />
  ));

  const reviewRankList = reviewRankData.map((reviewRank) => (
    <ReviewRank
      first={reviewRank[0]}
      second={reviewRank[1]}
      third={reviewRank[2]}
    />
  ));

  const tipRankList = tipRankData.map((tipRank) => (
    <TipRank first={tipRank[0]} second={tipRank[1]} third={tipRank[2]} />
  ));

  const userRankList = userRankData.map((userRank) => (
    <UserRank first={userRank[0]} second={userRank[1]} third={userRank[2]} />
  ));

  return (
    <div>
      <div className={classes.Rank}>
        {reviewRankList}
        {tipRankList}
        {userRankList}
      </div>
      <br /> <br />
      <h2 className={classes.text}>우리의 추천상품</h2>
      <br />
      <div className={classes.Rec}>{recList}</div>
    </div>
  );
}

export default Home;
