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

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 350,
  },
  media: {
    margin: "auto",
    height: 200,
    width: 200,
  },
});

const ItemsGrid = ({ items }) => {
  console.log(items);
  const classes = useStyles();
  return (
    <Grid className="item" items lg={4} md={6} xs={12}>
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
          {/* <Button size="small" color="secondary">
            Share
          </Button> */}
          <IconButton>
            <AddCircleIcon color="secondary" />
            <Typography className="add_to_cart"> Add</Typography>
          </IconButton>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemsGrid;
