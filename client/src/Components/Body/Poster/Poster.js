import { Button } from "@material-ui/core";
import React from "react";

const Poster = () => {
  return (
    <div className="poster">
      <div className="inner">
        <h2>Best food waiting for your belly</h2>
        <form>
          <input type="text" placeholder="Search food items" />
          <Button variant="contained" color="secondary">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Poster;
