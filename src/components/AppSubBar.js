import React, { useState } from "react";
import "./AppHeader.css";
import { Link, NavLink } from 'react-router-dom';

//UI import
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: 'auto',
    width: 'fit-content',
    color: 'gray', 
    fontSize: '10pt',
  },

  tools: {
    backgroundColor: 'white',
    border: 'none',
    marginRight: '10px',
    marginLeft: '10px',
    transition: '0.3s',
    },

  subBar: {
    backgroundColor: 'white', 
    borderStyle: 'inset',
    border: '0',
  }
  
}))

function AppSubBar() {
  const classes = useStyles();
  return (
    <div className="AppSubBar">
      <AppBar position="static" className={classes.subBar} elevation={0}>
        <Toolbar>
          <NavLink to="review" style={{textDecoration: 'none'}}><Button color="black" className="tools"><h4 className="btnText">우리의 리뷰</h4></Button></NavLink>
          <Button color="black" className="tools"><h4 className="btnText">우리의 장터</h4></Button>
          <NavLink to="tip" style={{textDecoration: 'none'}}><Button color="black" className="tools"><h4 className="btnText">우리의 꿀팁</h4></Button></NavLink>
        </Toolbar>
      </AppBar>
      <div className={classes.text}>우리와 함께 삶의 질을 높여보세요!</div>
      <br />
    </div>
  );
}




export default AppSubBar;