import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
  user: {
    display: 'flex',
    marginLeft: '15%',
    columnGap: '2px',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  contentAndComment: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '15%',
    marginRight: '15%',
  },
  content: {
    display: 'inline',
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  comment: {
    display: 'inline',
    backgroundColor: 'aqua',
  },
}));



function ReviewDetail() {
  const classes = useStyles();
  return (
    <div> <br /> <br />
      <div className={classes.user}>
        <Avatar
          className={classes.avatar}
          alt="Remy Sharp"
          src=""
        />
        User
      </div>
      <div className={classes.contentAndComment}>
        <div className={classes.content}>
          <h2>
            제목입니당
          </h2>
        </div>
        <div className={classes.comment}>
          Hello
        </div>
      </div>
    </div>
  );
}

export default ReviewDetail;