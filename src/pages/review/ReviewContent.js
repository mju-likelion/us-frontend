import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  user: {
    display: 'flex',
    columnGap: '2px',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}));

const dummy_prop = {
  userName: '역북동 N년차',
  title: '명진당 리뷰',
  content: '별로에요',
  like: 200,
  comment: 130,
}


function ReviewContent() {
  const classes = useStyles();
  const {userName, title, content, like, comment} = dummy_prop
  return (
    <Card className={classes.root}>
      <div className={classes.user}>
      <Avatar className={classes.avatar} alt="Remy Sharp" src="https://lh3.googleusercontent.com/proxy/rj4HV_N2CP2n4qT8BXu1nu9LW_eDd3XYX30S028nyBCcg0tOMkaSx-H_L-0AsOFKC1XkOSmjWI9EF6DVotlOkHMlPrwktcHjBvpkPaD8BHZJSY3ZO93sQ0TViNiXnSycp2i22eZ1hG1dxg47Ls4Ko92zEgA5P08UcVWLoSeDdg" />
      {userName}
      </div>
      <CardActionArea>
        <Rating name="half-rating" defaultValue={2}/>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <FavoriteIcon style={{color: '#84E0CB'}} /> {like}
        </Button>
        <Button size="small" color="primary">
          <CommentIcon style={{color: '#84E0CB'}} /> {comment}
        </Button>
      </CardActions>
    </Card>
  );
}


export default ReviewContent;