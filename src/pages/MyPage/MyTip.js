import React from 'react';
import TipContent from '../tip/TipContent';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "center",
    columnGap: "10px",
    rowGap: "50px",
    width: "80%",
    margin: "auto",
    marginTop: "10px",
  }
}))

function MyTip() {
  const classes = useStyles(); 
  return (
    <div className={classes.content}>
      <TipContent />
    </div>
  );
}

export default MyTip;