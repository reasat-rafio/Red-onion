import React from "react";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import { addToTheCart } from "../../../redux/Actions/foodAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 350,
    paddingTop: 30,
  },
  media: { margin: "auto", height: 200, width: 200 },
});

const ItemsGrid = ({ id, items }) => {
  // OnClick function
  const onClick = () => {
    window.location.pathname = `category/${items.id}`;
  };

  // AddToCart
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(addToTheCart(items));
  };

  const classes = useStyles();
  return (
    <Grid className="item" item lg={4} md={6} xs={12}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={items.img}
            title={items.title}
          />
          <CardContent>
            <Typography component="p">{items.title}</Typography>
            <Typography component="h2">{items.text}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton onClick={AddToCart}>
            <AddCircleIcon color="secondary" />
            <Typography className="add_to_cart"> Add</Typography>
          </IconButton>
          <Button onClick={onClick} size="small" color="secondary">
            See More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemsGrid;
