import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "antd";
import { axiosInstance, useAxios } from "api";
import { useAppContext } from "store";
import Comment from "./Comment";
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  comment: {
    display: "inline",
    width: "30%",
    marginLeft: "3%",
  },
  button: {
    color: "white",
    backgroundColor: "#84E0CB",
    fontWeight: "bold",
    float: "right",
  },
}));

function CommentList() {
  const classes = useStyles();

  const {
    store: { jwtToken },
  } = useAppContext();

  const [commentContent, setCommentComment] = useState("");

  const id = useRouteMatch();

  const headers = { Authorization: `JWT ${jwtToken}` };

  const [{ data: commentList }, refetch] = useAxios({
    url: `/api/posts/${id.params.id}/comments/`,
    headers,
  });

  const handleCommentSave = async () => {
    const apiUrl = `/api/posts/${id.params.id}/comments/`;

    // console.group("handleCommentSave");
    try {
      const response = await axiosInstance.post(
        apiUrl,
        { message: commentContent },
        { headers }
      );
      console.log(response);
      setCommentComment("");
      refetch();
    } catch (error) {
      console.log(error);
    }

    // console.groupEnd();
  };

  return (
    <div className={classes.comment}>
      {commentList &&
        commentList.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      <br />
      <Input.TextArea
        style={{ marginBottom: ".5em" }}
        value={commentContent}
        onChange={(e) => setCommentComment(e.target.value)}
      />
      <Button
        block
        type="primary"
        disabled={commentContent.length === 0}
        onClick={handleCommentSave}
      >
        댓글 쓰기
      </Button>
    </div>
  );
}

export default CommentList;
