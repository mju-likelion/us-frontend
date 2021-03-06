import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  content: {
    display:'flex',
    justifyContent: 'center',
    columnGap: '100px',
  },

  btn: {
    display: 'block',
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    border: '1px solid #84E0CB',
    backgroundColor: '#84E0CB',
    fontFamily: "Noto Sans KR, sans-serif",
    fontSize: "xx-large",
    fontWeight: "bold",
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#84E0CB',
      border: 'none',
    }
  },

  explain: {
    width: '205px',
    textAlign: 'center',
    color: 'gray'
  }
}))


function Entrance() {
  const classes = useStyles();
  return (
    <div>
      <br /> <br /> <br />
      <div className={classes.content}>
        <NavLink to="/marketplace/usedTrading" activeClassName="activation" style={{textDecoration: 'none'}}><Button className={classes.btn}>중고거래</Button></NavLink>
        <NavLink to="/marketplace/barter" activeClassName="activation" style={{textDecoration: 'none'}}><Button className={classes.btn}>물물교환</Button></NavLink>
      </div>
      <div className={classes.content}>
        <h3 className={classes.explain}>우리와 편하게 <br /> 중고거래를 해보세요!</h3>
        <h3 className={classes.explain}>우리와 편하게 <br /> 물물교환을 해보세요!</h3>
      </div>
    </div>
  );

}

export default Entrance;