import React, { useEffect, useState } from "react";
import Axios from "axios";
import Review from "./Review";
import ReviewBar from "./ReviewBar";
import { makeStyles } from "@material-ui/core/styles";

const apiUrl = "http://localhost:8000/api/posts/";

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

function PostList() {
  const [postList, setPostList] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        const { data } = response;
        console.log("loaded response :", response);
        setPostList(data);
      })
      .catch((error) => {
        // error.response;
      });
    console.log("mounted");
  }, []);

  return (
    <div>
      <ReviewBar />
      <div className={classes.contents}>
        {postList.map((review) => (
          <Review reviews={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
