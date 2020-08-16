import React from "react";
import TipRank from "../components/TipRank";
import ReviewRank from "../components/ReviewRank";
import UserRank from "../components/UserRank";
import Recommend from "../components/Recommend";
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
