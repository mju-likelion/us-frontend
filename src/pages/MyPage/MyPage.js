import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  myPage: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '50px'
  },
  left: {
    display: 'grid',
    gridRowGap: '25px',
    width: '30%',
  },
  myReview: {
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '15px',
  },
  add: {
    float: 'right',
  },
  myTip: {
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '15px',
  },
  myChat: {
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '15px',
  },
  used: {
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '15px',
  },
  right: {
    display: 'grid',
    marginRight: '8%',
    width: '15%',
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '15px',
    justifyContent: 'center',
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  }
}));

function MyPage() {
  const classes = useStyles();
  return (
    <div className={classes.myPage}>
      <div className={classes.left}>
        <div className={classes.myReview}>
          <NavLink to="/mypage/myreview" style={{textDecoration: 'none', color: 'black'}}>나의 리뷰</NavLink> 
          <div style={{display: 'inline', color: '#84E0CB', marginLeft: '5px'}}>1</div>
          <div>Content1</div>
        </div>
        <div className={classes.myTip}>
          <NavLink to="/mypage/mytip" style={{textDecoration: 'none', color: 'black'}}>나의 꿀팁</NavLink>
          <div style={{display: 'inline', color: '#84E0CB', marginLeft: '5px'}}>1</div>
          <div>Content1</div>
        </div>
        <div className={classes.myChat}>
          <NavLink to="/mypage/mychat" style={{textDecoration: 'none', color: 'black'}}>나의 채팅</NavLink>
          <div style={{display: 'inline', color: '#84E0CB', marginLeft: '5px'}}>1</div>
          <div>Content1</div>
        </div>
        <div className={classes.used}>
          <NavLink to="/mypage/myused" style={{textDecoration: 'none', color: 'black'}}>나의 중고물품</NavLink>
          <div style={{display: 'inline', color: '#84E0CB', marginLeft: '5px'}}>1</div>
          <div>Content1</div>
        </div>
      </div>
      <div className={classes.right}>
        <div>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src=""
          />
        </div>
          <h3>나의 활동</h3>
          <div>리뷰: 1</div>
          <div>꿀팁: 1</div>
          <div>팔로워: 1</div>
          <div>팔로잉: 1</div>
      </div>
    </div>
  );
}

export default MyPage;