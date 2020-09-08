import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  user: {
    display: 'flex',
    columnGap: '2px',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  contentAndComment: {
    display: 'flex',
    marginLeft: '15%',
  },
  content: {
    width: '50%',
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '15px'
  },
  contentTitle: {
    display: 'flex', 
    justifyContent: 'center',
  },
  contentImage: {
    display: 'flex', 
    justifyContent: 'center',
    columnGap: '5px',
  },
  contentText: {
    display: 'flex', 
    justifyContent: 'center',
    marginTop: '15px',
  },
  comment: {
    display: 'inline',
    width: '30%',
    marginLeft: '3%'
  },
  button: {
    color: "white",
    backgroundColor: "#84E0CB",
    fontWeight: "bold",
    float: 'right',
  },
  commentContent:{

  },
  commentDetail: {
    border: '2px solid #84E0CB',
    padding: '7px',
    marginTop: '20px',
    borderRadius: '20px',
  },
  commentUser: {
    display: 'flex',
    columnGap: '2px',
  },
  commentTime: {
    color: '#636e72', 
    fontSize: 'x-small',
    marginLeft: '5px',
    paddingTop: '5px'
  },
  commentText: {
    marginTop: '3px',
    display: 'flex',
    wordBreak: 'break-all'
  },
  notchedOutline: {
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    '&:hover': {
        borderColor: '#84E0CB',
        borderWidth: 2
    }
}
}));



function ReviewDetail() {
  const classes = useStyles();
  return (
    <div> <br />
      <div className={classes.contentAndComment}>
        <div className={classes.content}>
        <div className={classes.user}>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src=""
          />
          User
        </div>
          <h1 className={classes.contentTitle}>
            명진당 리뷰
          </h1>
          <div className={classes.contentImage}>
            <img src={require("./명진당.jpg")} alt="예시 사진" />
          </div>
          <div className={classes.contentText}>
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text text text text text
          </div>
        </div>
        <div className={classes.comment}>
          <div style={{height: '30px'}}>
            <Button
              className={classes.button}
              variant="contained"
              disableElevation
            >
              글목록
            </Button>
          </div>
          <div className={classes.commentContent}>
            <div className={classes.commentDetail} >
              <div className={classes.commentUser}>
                <Avatar
                  className={classes.avatar}
                  alt="Remy Sharp"
                  src=""
                />
                User
                <div className={classes.commentTime}>
                  1시간 전
                </div>
              </div>
              <div className={classes.commentText}>
                HiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHi
              </div>
            </div>
            <div className={classes.commentDetail} >
              <div className={classes.commentUser}>
                <Avatar
                  className={classes.avatar}
                  alt="Remy Sharp"
                  src=""
                />
                User
                <div className={classes.commentTime}>
                  1시간 전
                </div>
              </div>
              <div className={classes.commentText}>
                HiHiHi
              </div>
            </div>
            <div className={classes.commentDetail} >
              <div className={classes.commentUser}>
                <Avatar
                  className={classes.avatar}
                  alt="Remy Sharp"
                  src=""
                />
                User
                <div className={classes.commentTime}>
                  1시간 전
                </div>
              </div>
              <div className={classes.commentText}>
                HiHiHi
              </div>
            </div>
            <div className={classes.commentDetail} >
              <div className={classes.commentUser}>
                <Avatar
                  className={classes.avatar}
                  alt="Remy Sharp"
                  src=""
                />
                User
                <div className={classes.commentTime}>
                  1시간 전
                </div>
              </div>
              <div className={classes.commentText}>
                HiHiHi
              </div>
            </div>
          </div> <br />
          <TextField
          id="outlined-multiline-static"
          label="우리의 댓글"
          multiline
          rows={4}
          variant="outlined"
          fullWidth="true"
          InputProps={{
            classes: {
                notchedOutline: classes.notchedOutline
            }
          }}
          />
          <Button
              className={classes.button}
              style={{marginTop: '15px'}}
              variant="contained"
              disableElevation
            >
              확인
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReviewDetail;