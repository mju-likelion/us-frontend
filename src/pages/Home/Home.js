import React from "react";
import TipRank from "./TipRank";
import ReviewRank from "./ReviewRank";
import UserRank from "./UserRank";
import Recommend from "./Recommend";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Rank: {
    display:'flex',
    justifyContent: 'center',
    columnGap: '20%',
  },
  Rec: {
    display:'flex',
    justifyContent: 'center',
    columnGap: '10%',
    width: '80%',
    margin: 'auto',
  }
}));


function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.Rank}>
          <ReviewRank />
          <TipRank />
          <UserRank />
      </div>
      <br />
      <br />
      <div className={classes.Rec}>
        <Recommend />
        <Recommend />
        <Recommend />
      </div>
    </div>
  );
}

export default Home;
