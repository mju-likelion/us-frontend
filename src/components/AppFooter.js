import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  AppFooter: {
    height: '300px',
    backgroundColor: '#84e0cb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '100px',
  }
}))


function AppFooter() {
  const classes = useStyles();
  return (
    <div>
      <br /> <br /> <br /> <br /> <br />
      <div className={classes.AppFooter} >
        <img src={require("./logo-us-2.svg")} className={classes.logo} alt="우리 로고 이미지" />
      </div>
    </div>
  );
}

export default AppFooter;
