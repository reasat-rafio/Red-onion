import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import img from "../../hot-onion-restaurent-resources/logo2.png";
import { useForm } from "react-hook-form";

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
  },
  img: {
    cursor: "pointer",
    height: 40,
  },
}));

export default function SignUp() {
  // On Submit event
  const onSubmit = (data) => {
    console.log(data);
  };

  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <Container className="login" component="main" maxWidth="sm">
      <CssBaseline />
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
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            color="secondary"
            autoFocus
            inputRef={register}
          />
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
            inputRef={register}
          />
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
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Confirm Password"
            type="confirm_password"
            id="confirm_password"
            autoComplete="confirm_password"
            color="secondary"
            inputRef={register}
          />
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
            <Grid item>
              <Link color="secondary" href="/login">
                {"Already have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
