import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  Bar: {
    width: '80%',
  },
  button: {
    color: 'white',
    backgroundColor: '#84E0CB',
    fontWeight: 'bold',
    marginRight: '5px',
    marginLeft: '5px',
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
  },
  searchBar: {
    border: '3px solid #84E0CB'
  },
}));

function UsedTradingBar() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.Bar} mx="auto">
        <Box className={classes.search}>  
          <InputBase 
          placeholder="Hello"
          className={classes.searchBar}
          display="inline"
          />
          <SearchIcon display="inline" />
        </Box>
        <Box >
          <Button className={classes.button} variant="contained" disableElevation>
            인기순
          </Button>       
          <Button className={classes.button} variant="contained" disableElevation>
            최신순
          </Button>
        </Box>

      </Box>
    </div>
  );
}


export default UsedTradingBar;