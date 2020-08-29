import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import { useAppContext } from "../../store";
import { setToken } from "store";
import { useHistory, useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#84E0CB",
    color: "white",
    "&:hover": {
      backgroundColor: "#84E0CB",
    },
  },
  input: {
    boxShadow: `2px 2px 5px 1px rgba(0, 0, 0, 0.2)`,
  },
}));

export default function Login() {
  const classes = useStyles();

  const { dispatch } = useAppContext();

  const [inputs, setInputs] = useState({ username: "", password: "" });

  const location = useLocation();

  const history = useHistory();

  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: "/" },
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = inputs;

    Axios.post("http://localhost:8000/accounts/token/", data)
      .then((response) => {
        const {
          data: { token: jwtToken },
        } = response;

        dispatch(setToken(jwtToken));
        history.push(loginRedirectUrl);
      })
      .catch((error) => {
        console.log("error :", error);
      });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          로그인
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            inputProps={{
              minLength: 3,
              maxLength: 20,
            }}
            onChange={onChange}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputProps={{
              minLength: 6,
              maxLength: 20,
            }}
            onChange={onChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
