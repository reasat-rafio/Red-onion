import React from "react";
import ReviewForm from "./ReviewForm/ReviewForm";
import { Grid } from "@material-ui/core";
const Review = () => {
  return (
    <div className="review">
      <div className="inner">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={1} xs={false} />
          <Grid item className="center" md={10} xs={12}>
            <ReviewForm />
          </Grid>
          <Grid className="right" item md={1} xs={false} />
        </Grid>
      </div>
    </div>
  );
};

export default Review;
