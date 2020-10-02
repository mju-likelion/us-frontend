import React, { useEffect, useState } from "react";
import { axiosInstance } from "api";
import ReviewBar from "./ReviewBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Link from "@material-ui/core/Link";
import CommentIcon from "@material-ui/icons/Comment";

const apiUrl = "/api/posts/";

const useStyles = makeStyles((theme) => ({
  contents: {
    width: "40%",
    margin: "auto",
  },
  root: {
    marginTop: "10px",
    marginBottom: "40px",
  },

  user: {
    display: "flex",
    columnGap: "2px",
    marginTop: "15px",
  },

  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: "15px",
    marginBottom: "10px",
    marginRight: "10px",
  },
  // media: {
  //   width: "500px",
  //   height: "500px",
  // },
}));

function PostList() {
  const [postList, setPostList] = useState([]);

  const classes = useStyles();

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
  // console.log(postList);
  return (
    <div>
      <ReviewBar />
      <div className={classes.contents}>
        {postList.map((review) => {
          return (
            <Card className={classes.root} key={review.id}>
              <div className={classes.user}>
                <Avatar
                  className={classes.avatar}
                  alt="User"
                  src={review.author.avatar_url}
                />
                {review.author.username}
              </div>
              <Link
                href={`/review/` + review.id}
                underline="none"
                color="inherit"
              >
                <CardActionArea>
                  <CardMedia className={classes.media}>
                    <img
                      src={review.photo}
                      alt={review.title}
                      style={{ width: "100%" }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      {review.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Button size="small" color="primary">
                  <FavoriteIcon style={{ color: "#84E0CB" }} />
                </Button>
                {review.like}
                <Button size="small" color="primary">
                  <CommentIcon style={{ color: "#84E0CB" }} />
                </Button>
                {review.comment}
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
