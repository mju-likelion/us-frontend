import React, { useContext } from "react";
import { UserContext } from "./UserContext";

//GENERAL
import { TextField, Grid } from "@material-ui/core";

//USER PREFERENCES
export default (props) => {
  const [state] = useContext(UserContext);
  const { user } = state;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="bio"
          label="Bio"
          value={user.bio}
          name="bio"
          placeholder="Type few words about you"
          variant="outlined"
          margin="normal"
          multiline
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            maxLength: 200,
          }}
          fullWidth
          rows={3}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="website"
          label="address"
          name="website"
          type="address"
          value={user.website}
          placeholder="Type your address"
          helperText=""
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
