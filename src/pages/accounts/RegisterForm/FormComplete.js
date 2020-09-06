import React, { Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  title: {
    padding: theme.spacing(5, 0),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={classes.title}>
        회원가입을 축하드립니다.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        홈으로
      </Button>
    </Fragment>
  );
};
