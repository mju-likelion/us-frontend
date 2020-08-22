import React, { Component } from 'react';
import TipBar from './TipBar'
import TipContent from './TipContent'
import { makeStyles } from '@material-ui/core/styles';

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
  ['User1', 'title1', 'content1', 100, 150, 1],
  ['User2', 'title2', 'content2', 200, 250, 2],
  ['User3', 'title3', 'content3', 300, 350, 3],
  ['User4', 'title4', 'content4', 400, 450, 4],
];


function Tip() {
  const classes = useStyles();

  const tipList = tipData.map((tip) => 
    <TipContent userName={tip[0]} title={tip[1]} content={tip[2]} like={tip[3]} comment={tip[4]} grade={tip[5]} />
  );
  return (
    <div>
      <TipBar />
      <br />
      <div className={classes.contents}>
        {tipList}
      </div>
      <div className={classes.contents}>
        {tipList}
      </div> 
    </div>
    );
  }


export default Tip;