import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import { useAppContext } from "../../store";
import { setToken } from "store";
import { useHistory, useLocation } from "react-router-dom";
import { DropzoneArea } from "material-ui-dropzone";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
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
    borderRadius: 4,
    boxShadow: `2px 2px 5px 1px rgba(0, 0, 0, 0.2)`,
  },
  upload: {
    // display: "none",
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
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          글쓰기
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="제목"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={onChange}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="본문"
            id="password"
            multiline
            rows={25}
            autoComplete="current-password"
            onChange={onChange}
          />
          <DropzoneArea
            acceptedFiles={["image/*"]}
            dropzoneText={"Drag and drop an image here or click"}
            filesLimit={3}
            onChange={(files) => console.log("Files:", files)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.submit}
          >
            글쓰기
          </Button>
        </form>
      </div>
    </Container>
  );
}
