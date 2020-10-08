import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SelectedFood from "./SelectedFood.js/SelectedFood";
import { orderPlaced } from "../../redux/Actions/foodAction";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  AddDeliveryInstructor: {
    height: "60px",
  },
}));

// Form submit function
const onSubmit = (data) => {
  console.log(data);
};

const ReviewForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();

  const state = useSelector((state) => state.selectedFootStore);
  const { selectedFoods, inCart, loading, total } = state;

  const classes = useStyles();

  // cartIsEmpty
  const cartIsEmpty = () => {
    window.location.pathname = "/";
  };

  // handleOrderPlaced
  const handleOrderPlaced = () => {
    dispatch(orderPlaced());
    window.location.pathname = "/delivery";
  };

  // motion from animation
  const formVariant = {
    initial: {
      x: "-20vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  // motion cart animation
  const cartVariants = {
    initial: {
      scale: 0.7,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <div className="ReviewForm">
      {/* FORM Section */}
      <Grid container>
        <Grid className="form" item md={6} xs={12}>
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <motion.div
              variants={formVariant}
              initial="initial"
              animate="animate"
            >
              <Typography component="h1" variant="h5">
                Edit Delivery Details
              </Typography>
              <motion.div
                initial={{ y: "-20vh" }}
                animate={{ y: 0 }}
                className="divider"
              />
              <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  variant="outlined"
                  inputRef={register}
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  color="secondary"
                  inputRef={register}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Road Number"
                  label="Road Number"
                  id="Road Number"
                  autoComplete="Road Number"
                />
                <TextField
                  color="secondary"
                  variant="outlined"
                  inputRef={register}
                  margin="normal"
                  required
                  fullWidth
                  name="FlatSuitOrFloor"
                  label="Flat, Suite Or Floor"
                  id="Flat, Suite Or Floor"
                  autoComplete="Road Number"
                />
                <TextField
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  name="BusinessName"
                  label="Business Name"
                  id="businessName"
                  autoComplete="Business Name"
                />
                <TextField
                  InputProps={{
                    classes: { input: classes.AddDeliveryInstructor },
                  }}
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  inputRef={register}
                  required
                  fullWidth
                  name="AddDeliveryInstructor"
                  label="Add Delivery Instructor"
                  id="businessName"
                  autoComplete="Business Name"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Save & Continue
                </Button>
              </form>
            </motion.div>
          </Container>
        </Grid>
        {/* Cart Section */}
        <Grid className="cart" item md={6} xs={12}>
          <motion.div
            variants={cartVariants}
            initial="initial"
            animate="animate"
            className="item_cart"
          >
            <p>
              From <b>Gulshan Plaza Restaurant</b>
            </p>
            <p>Arriving in 20-30 mins</p>
            <p>107 Rd No 8</p>
            <h2>selected Item: {inCart}</h2>
            <h3>Total: {total.toFixed(2)} </h3>
            <div style={{ maxHeight: "400px", overflow: "scroll" }}>
              {selectedFoods.map((fd) => (
                <SelectedFood key={parseFloat(fd.id)} fd={fd} inCart={inCart} />
              ))}
            </div>
            {inCart == 0 ? (
              <Button
                onClick={cartIsEmpty}
                className="place_order_btn"
                variant="contained"
                color="secondary"
              >
                Add Food TO Cart
              </Button>
            ) : (
              <Button
                onClick={handleOrderPlaced}
                className="place_order_btn"
                variant="contained"
                color="secondary"
              >
                Place Order
              </Button>
            )}
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewForm;
