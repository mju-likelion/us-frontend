import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  commentContent: {},
  commentDetail: {
    border: "2px solid #84E0CB",
    padding: "7px",
    marginTop: "20px",
    borderRadius: "20px",
  },
  commentUser: {
    display: "flex",
    columnGap: "2px",
  },
  commentTime: {
    color: "#636e72",
    fontSize: "x-small",
    marginLeft: "5px",
    paddingTop: "5px",
  },
  commentText: {
    marginTop: "3px",
  },
}));

function Comment({ comment }) {
  const classes = useStyles();

  const {
    author: { username, avatar_url },
    message,
    created_at,
  } = comment;

  return (
    <div className={classes.commentContent}>
      <div className={classes.commentDetail}>
        <div className={classes.commentUser}>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src={avatar_url}
          />
          {username}
          <div className={classes.commentTime}>
            {moment(created_at).fromNow()}
          </div>
        </div>
        <div className={classes.commentText}>{message}</div>
      </div>
    </div>
  );
}

export default Comment;
