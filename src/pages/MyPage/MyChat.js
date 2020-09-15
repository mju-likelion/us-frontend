import { makeStyles } from '@material-ui/core';
import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  myChat: {
    marginLeft: '15%',
    marginRight: '15%'
  },
  content: {
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  userName: {
    marginLeft: '10px',
    marginTop: '0px',
    fontSize: 'x-large',
  },
  time: {
    marginTop: '11px',
    marginLeft: '10px',
    color: '#636e72', 
    fontSize: 'small',
  },
  chatContent: {
    marginTop: '8px',
    marginLeft: '10px',
  },
}));

function MyChat() {
  const classes = useStyles();
  return (
    <div className={classes.myChat}>
      <h1>채팅</h1>
        <NavLink to='/mypage/mychatdetail' style={{textDecoration: 'none', color: 'black'}}>
          <div className={classes.content}>
            <Avatar
              className={classes.avatar}
            />
            <div className={classes.userName}>User</div>
            <div className={classes.chatContent}>
              안녕하세요
            </div>
            <div className={classes.time}>한시간 전</div>
          </div>
        </NavLink>
    </div>
  );
}

export default MyChat;