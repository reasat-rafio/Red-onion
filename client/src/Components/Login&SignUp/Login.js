import React from "react";
import Link from "@material-ui/core/Link";
import img from "../../hot-onion-restaurent-resources/logo2.png";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { login_signUp_Success } from "../redux/Actions/userFormAction";
import { setSnackbar } from "../redux/Actions/snackbarAction";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,

    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
  },
  img: {
    cursor: "pointer",
    height: 40,
  },
}));

export default function Login() {
  const state = useSelector((state) => state.auth);
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();

  // On Submit event
  const onSubmit = async (data) => {
    const { email, password } = data;
    const token = state.token;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://red-onion71.herokuapp.com/auth/local",
        {
          identifier: email,
          password,
        },
        config
      );
      console.log(response.data.user.username);
      let value = {
        username: response.data.user.username,
        email,
        token: response.data.jwt,
      };
      dispatch(login_signUp_Success(value));
      dispatch(
        setSnackbar(
          true,
          "success",
          `${response.data.user.username} Welcome back! 😀`
        )
      );
      window.location.pathname = "/";
    } catch (err) {
      dispatch(setSnackbar(true, "error", `email or password is invalid`));
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img
            onClick={() => (window.location.pathname = "/")}
            className={classes.img}
            src={img}
            alt="logo"
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              color="secondary"
              autoFocus
              inputRef={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="errorSpan">Email is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="errorSpan">Email is incorrect</span>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
              inputRef={register({
                required: true,
                minLength: 5,
              })}
            />

            {errors.password && errors.password.type === "required" && (
              <span className="errorSpan">Password is required</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="errorSpan">
                password must be more than 5 characters
              </span>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              LogIn
            </Button>
            <Grid container>
              <Grid item xs>
                <Link color="secondary" href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link color="secondary" href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
