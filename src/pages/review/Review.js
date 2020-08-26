import React from "react";
import ReviewBar from "./ReviewBar";
import ReviewContent from "./ReviewContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contents: {
    display: "flex",
    justifyContent: "center",
    columnGap: "10px",
    rowGap: "50px",
    width: "80%",
    margin: "auto",
    marginTop: "10px",
  },
}));

const revData = [
  ["User1", "title1", "content1", 100, 150, 1],
  ["User2", "title2", "content2", 200, 250, 2],
  ["User3", "title3", "content3", 300, 350, 3],
  ["User4", "title4", "content4", 400, 450, 4],
];

function Review() {
  const classes = useStyles();

  const revList = revData.map((review) => (
    <ReviewContent
      userName={review[0]}
      title={review[1]}
      content={review[2]}
      like={review[3]}
      comment={review[4]}
      grade={review[5]}
    />
  ));
  return (
    <div>
      <ReviewBar />
      <br />
      <div className={classes.contents}>{revList}</div>
      <div className={classes.contents}>{revList}</div>
    </div>
  );
}

export default Review;
