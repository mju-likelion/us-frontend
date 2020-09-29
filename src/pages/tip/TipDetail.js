import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { axiosInstance } from "api";
import { useRouteMatch } from "react-router-dom";
import CommentList from "./CommentList";

const useStyles = makeStyles((theme) => ({
  user: {
    display: "flex",
    columnGap: "2px",
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  contentAndComment: {
    display: "flex",
    marginLeft: "15%",
  },
  content: {
    width: "50%",
    border: "2px solid #84E0CB",
    borderRadius: "20px",
    padding: "15px",
  },
  contentTitle: {
    display: "flex",
    justifyContent: "center",
  },
  contentImage: {
    display: "flex",
    justifyContent: "center",
    columnGap: "5px",
    marginRight: "40px",
    marginLeft: "40px",
    marginBottom: "50px",
  },
  comment: {
    display: "inline",
    width: "30%",
    marginLeft: "3%",
  },
}));

function TipDetail({ post }) {
  const [postList, setPostList] = useState([]);

  const id = useRouteMatch();

  const apiUrl = `/api/posts/${id.params.id}`;

  useEffect(() => {
    axiosInstance
      .get(apiUrl)
      .then((response) => {
        const { data } = response;
        // console.log("loaded response :", response);
        setPostList(data);
      })
      .catch((error) => {
        // error.response;
      });
  }, []);

  const classes = useStyles();
  // console.log(id.params);

  // console.log(postList.author?.username);
  return (
    <div>
      <br />
      <div className={classes.contentAndComment}>
        <div className={classes.content}>
          <div className={classes.user}>
            <Avatar
              className={classes.avatar}
              alt="User"
              src={postList.author?.avatar_url}
            />
            {postList.author?.username}
          </div>
          <h1 className={classes.contentTitle}>{postList.title}</h1>
          <div className={classes.contentImage}>
            <img
              src={postList.photo}
              alt={postList.title}
              style={{ width: "100%" }}
            />
          </div>
          <div>{postList.caption}</div>
        </div>

        <div className={classes.comment}>
          <CommentList post={post} />
        </div>
      </div>
    </div>
  );
}

export default TipDetail;
