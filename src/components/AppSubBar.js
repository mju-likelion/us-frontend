import React, { useState } from "react";
import "./AppHeader.css";
import { Link } from 'react-router-dom';

//UI import
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: 'auto',
    width: 'fit-content',
    backgroundColor: 'gray', 
    color: 'white', 
    fontSize: '10pt',
  },

  tools: {
    backgroundColor: 'white',
    border: 'none',
    marginRight: '10px',
    marginLeft: '10px',
    transition: '0.3s',
    },
  
}))

function AppSubBar() {
  const classes = useStyles();
  return (
    <div className="AppSubBar">
      <AppBar position="static" className="subBar" elevation={0} style={{backgroundColor: 'white', borderStyle: 'inset', borderTop: '0', minHeight: '66.4px'}}>
        <Toolbar>
          <Link to="reviews" style={{textDecoration: 'none'}}><Button color="black" className="tools"><h4 className="btnText">우리의 리뷰</h4></Button></Link>
          <Button color="black" className="tools"><h4 className="btnText">우리의 장터</h4></Button>
          <Button color="black" className="tools"><h4 className="btnText">우리의 꿀팁</h4></Button>
        </Toolbar>
      </AppBar>
      <div className={classes.text}>우리와 함께 삶의 질을 높여보세요!</div>
      <br />
    </div>
  );
}




export default AppSubBar;