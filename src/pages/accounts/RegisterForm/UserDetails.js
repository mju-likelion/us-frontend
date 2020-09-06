import React, { useContext } from "react";
import { TextField, Grid } from "@material-ui/core";
import { isWidthDown } from "@material-ui/core/withWidth";
import { UserContext } from "./UserContext";

export default (props) => {
  const [state] = useContext(UserContext);
  const { user, errors } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 18);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          placeholder="유저 이름을 입력해주세요."
          name="username"
          label="Username"
          value={user.username}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          error={!!errors["username"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder="이메일을 입력해주세요."
          name="email"
          label="Email"
          value={user.email}
          type="email"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["email"]}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="date"
          name="birthdate"
          id="birthdate"
          label="Birthdate"
          defaultValue={user.birthdate}
          helperText=""
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: "1920-01-01",
            max: dateLimit.toISOString().slice(0, 10),
          }}
          error={!!errors["birthdate"]}
          required
          fullWidth={isWidthDown("sm")}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="비밀번호를 입력해주세요."
          name="password"
          label="Password"
          value={user.password}
          type="password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          error={!!errors["password"]}
          inputProps={{
            minLength: 6,
            maxLength: 20,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="비밀번호를 다시 입력해주세요."
          label="Password"
          name="confirmPassword"
          value={user.confirmPassword}
          type="password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["confirmPassword"]}
          inputProps={{
            minLength: 6,
            maxLength: 20,
          }}
          required
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
