import React, { Component } from 'react';
import ReviewBar from './ReviewBar'
import ReviewContent from './ReviewContent'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contents: {
    display:'flex',
    justifyContent: 'center',
    columnGap: '10px',
    rowGap: '50px',
    width: '80%',
    margin: 'auto',
  }
}));


function Review() {
  const classes = useStyles();
  return (
    <div>
      <ReviewBar />
      <br />
      <div className={classes.contents}>
      <ReviewContent />
      <ReviewContent />
      <ReviewContent />
      <ReviewContent />
      </div>
      <div className={classes.contents}>
      <ReviewContent />
      <ReviewContent />
      <ReviewContent />
      <ReviewContent />
      </div>
    </div>
  );
}


export default Review;