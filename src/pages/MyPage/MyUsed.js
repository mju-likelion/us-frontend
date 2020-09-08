import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UsedTradingContent from '../marketplace/UsedTrading/UsedTradingContent'

const useStyles = makeStyles((theme) => ({
  content: {
    display:'flex',
    justifyContent: 'center',
    columnGap: '10px',
    rowGap: '50px',
    width: '80%',
    margin: 'auto',
    marginTop: '10px',
  }
}));

function MyUsed() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <UsedTradingContent />
    </div>
  );
}

export default MyUsed;