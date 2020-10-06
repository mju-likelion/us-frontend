import React, { useEffect, useState } from 'react';
import { axiosInstance } from "api";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const apiUrl = "/api/posts/";

const useStyles = makeStyles((theme) => ({
  follow: {
    display: 'flex',
    justifyContent: 'center'
  },
  right: {
    display: 'grid',
    width: '15%',
    border: '2px solid #84E0CB',
    borderRadius: '20px',
    padding: '15px',
    justifyContent: 'center',
    textAlign: 'center',
    rowGap: '30px'
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  button: {
    color: "white",
    backgroundColor: "#84E0CB",
    fontWeight: "bold",
    marginRight: "5px",
    marginLeft: "5px",
  },
}))

function Follow() {
  const [follow, setFollow] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axiosInstance
      .get(apiUrl)
      .then((response) => {
        const { data } = response;
        // console.log("loaded response :", response);
        setFollow(data);
      })
      .catch((error) => {
        // error.response;
      });
  }, []);
  return (
    <div className={classes.follow}>
      <div className={classes.right}>
        <div>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src=""
          />
        </div>
          <Button
            className={classes.button}
            variant="contained"
            disableElevation
          >
              Follow
          </Button>
          <h3>나의 활동</h3>
          <div>리뷰: 1</div>
          <div>꿀팁: 1</div>
          <div>팔로워: 1</div>
          <div>팔로잉: 1</div>
      </div>
    </div>
  );
}

export default Follow;