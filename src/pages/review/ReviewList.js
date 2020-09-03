import React, { useEffect, useState } from "react";
import Axios from "axios";
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
import CommentIcon from "@material-ui/icons/Comment";

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
  root: {
    maxWidth: 345,
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
        {postList.map((review) => {
          return (
            <Card className={classes.root} key={review.id}>
              <div className={classes.user}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src="" />
              </div>
              <CardActionArea>
                <CardMedia>
                  <img
                    src={review.photo}
                    alt={review.title}
                    style={{ width: "200px" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {review.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {review.caption}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <FavoriteIcon style={{ color: "#84E0CB" }} />
                </Button>
                <Button size="small" color="primary">
                  <CommentIcon style={{ color: "#84E0CB" }} />
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
