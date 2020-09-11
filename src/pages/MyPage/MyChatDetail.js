import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: '15%',
    marginRight: '15%',
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '20px',
  }
}));

function MyChatDetail() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      Detail detail
    </div>
  );
}

export default MyChatDetail;