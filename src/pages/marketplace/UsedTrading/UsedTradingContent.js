import React from "react";
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

const useStyles = makeStyles((theme) => ({
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

function UsedTradingContent(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.user}>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src=""
          />
          {props.userName}
        </div> <br />
        <CardActionArea>
          <CardMedia>
            <img src={require("./명진당.jpg")} alt="예시 사진" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.content} <br />
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <FavoriteIcon style={{ color: "#84E0CB" }} /> {props.like}
          </Button>
          <Button size="small" color="primary">
            <CommentIcon style={{ color: "#84E0CB" }} /> {props.comment}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default UsedTradingContent;
