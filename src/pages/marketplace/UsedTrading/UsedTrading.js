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
  ['컴잘알', '모니터 팔아요!', 'content1', 100, 150],
  ['헌내기', '물리학실험 교재팔아요~', 'content2', 200, 250],
  ['헬창3일차', '아령 팝니다.', 'content3', 300, 350],
  ['중고상인', '시계 사실분! A급임ㅇㅇ', 'content4', 400, 450],
];

function UsedTrading() {
  const classes = useStyles();

  const tipList = tipData.map((tip) => 
    <UsedTradingContent userName={tip[0]} title={tip[1]} content={tip[2]} like={tip[3]} comment={tip[4]} />
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