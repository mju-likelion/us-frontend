import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
});

const dummy_prop = {
  title: '상품',
  content: '상품설명입니다.',
  like: 5,
  comment: 10,
}

function Recommend() {
  const classes = useStyles();
  const {title, content, like, comment} = dummy_prop
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://i.ytimg.com/vi/QMCIR-e9D5Q/maxresdefault.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
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


export default Recommend;
