import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { axiosInstance } from "api";
import UserPreferences from "./UserPreferences";
import UserDetails from "./UserDetails";
import UserSummary from "./UserSummary";
import FormComplete from "./FormComplete";
import { Box, Typography, Snackbar, SnackbarContent } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import { UserContext } from "./UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 12),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 6),
    },
  },
  center: {
    textAlign: "center",
  },
  content: {
    padding: theme.spacing(3, 0, 3, 5),
  },
  buttonsContainer: {
    margin: theme.spacing(2, 0),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const steps = ["기본 정보", "선택사항", "요약"];

export default (props) => {
  const [completed, setCompleted] = React.useState(false);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useContext(UserContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };
  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < steps.length - 1) handleNext();
    else {
      setCompleted(true);
    }
    if (activeStep === 2) {
      axiosInstance.post("/accounts/signup/", state.user);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <UserDetails />;
      case 1:
        return <UserPreferences />;
      case 2:
        return <UserSummary />;
      default:
        return "Unknown step";
    }
  };

  const handleError = (e) => {
    errors[e.target.name] = e.target.validationMessage;
    setState({ ...state, errors: { ...errors } });
    setOpen(true);
  };

  const handleChange = (e) => {
    //비밀번호 확인
    if (
      e.target.name === "confirmPassword" &&
      e.target.value !== state.user.password
    ) {
      e.target.setCustomValidity("비밀번호가 다릅니다!");
    } else {
      e.target.setCustomValidity("");
    }
    if (e.target.name === "password") {
      const confirm = e.target.form.querySelector(
        "input[name='confirmPassword']"
      );

      if (e.target.value === state.user.confirmPassword) {
        delete errors[confirm.name];
        confirm.setCustomValidity("");
      } else {
        confirm.setCustomValidity("비밀번호가 다릅니다!");
        errors[confirm.name] = confirm.validationMessage;
      }
    }
    if (e.target.validity.valid) {
      delete errors[e.target.name];
    } else {
      errors[e.target.name] = e.target.validationMessage;
    }
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      user: { ...state.user, [e.target.name]: value },
      errors: { ...errors },
    });
  };

  return (
    <Fragment>
      {!completed && (
        <Box className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption"></Typography>
                );
              }

              return (
                <Step key={index}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                  <StepContent>
                    <form
                      onSubmit={handleSubmit}
                      onInvalid={handleError}
                      onChange={handleChange}
                      className={classes.content}
                    >
                      {getStepContent(activeStep)}
                      <div className={classes.buttonsContainer}>
                        <Button
                          disabled={activeStep === 0}
                          className={classes.button}
                          variant="contained"
                          onClick={handleBack}
                        >
                          뒤로
                        </Button>
                        {activeStep < steps.length - 1 && (
                          <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            color="primary"
                          >
                            다음
                          </Button>
                        )}
                        {activeStep === steps.length - 1 && (
                          <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            color="primary"
                          >
                            제출
                          </Button>
                        )}
                      </div>
                    </form>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        resumeHideDuration={3000}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        open={open}
      >
        <SnackbarContent
          className={(classes.error, classes.error)}
          message={
            <span className={classes.message}>
              <ErrorIcon className={classes.icon} />
              {"회원가입 정보를 확인해주세요."}
            </span>
          }
        />
      </Snackbar>
      {completed && (
        <Box className={(classes.root, classes.center)}>
          <FormComplete />
        </Box>
      )}
    </Fragment>
  );
};
