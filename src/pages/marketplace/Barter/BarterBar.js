import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  barterBar: {
    width: "40%",
  },
  button: {
    color: "white",
    backgroundColor: "#84E0CB",
    fontWeight: "bold",
    marginRight: "5px",
    marginLeft: "5px",
  },
  search: {
    display: "flex",
    justifyContent: "center",
  },
  searchBar: {
    border: "3px solid #84E0CB",
    marginBottom: "10px",
  },
}));

function BarterBar() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.barterBar} mx="auto">
        <Box className={classes.search}>
          <InputBase
            placeholder="Hello"
            className={classes.searchBar}
            display="inline"
          />
          <SearchIcon display="inline" />
        </Box>
        <Box display="flex">
          <Box flexShrink={0}>
            <Button
              className={classes.button}
              variant="contained"
              disableElevation
            >
              인기순
            </Button>
          </Box>
          <Box width="100%">
            <Button
              className={classes.button}
              variant="contained"
              disableElevation
            >
              최신순
            </Button>
          </Box>
          <Box flexShrink={0}>
            <Button
              className={classes.button}
              variant="contained"
              disableElevation
              href="/marketplace/barter/post"
            >
              글쓰기
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default BarterBar;
