import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UsedTradingBar from './UsedTradingBar';
import UsedTradingContent from './UsedTradingContent';

const useStyles = makeStyles((theme) => ({
  contents: {
    display:'flex',
    justifyContent: 'center',
    columnGap: '10px',
    rowGap: '50px',
    width: '80%',
    margin: 'auto',
    marginTop: '10px',
  }
}));

const tipData = [
  ['User1', '꿀팁공유한다. 1', 'content1', 100, 150, 1],
  ['User2', '꿀팁공유한다. 2', 'content2', 200, 250, 2],
  ['User3', '꿀팁공유한다. 3', 'content3', 300, 350, 3],
  ['User4', '꿀팁공유한다. 4', 'content4', 400, 450, 4],
];

function UsedTrading() {
  const classes = useStyles();

  const tipList = tipData.map((tip) => 
    <UsedTradingContent userName={tip[0]} title={tip[1]} content={tip[2]} like={tip[3]} comment={tip[4]} grade={tip[5]} />
  );
  return (
    <div>
      <UsedTradingBar />
      <br />
      <div className={classes.contents}>
        {tipList}
      </div>
      <div className={classes.contents}>
        {tipList}
      </div> 
      <h1>Hello UsedTrading !</h1>
    </div>
  );
}


export default UsedTrading;