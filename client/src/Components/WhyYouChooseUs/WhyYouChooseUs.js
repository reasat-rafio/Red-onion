import { Grid } from "@material-ui/core";
import React from "react";
import RecipeReviewCard from "./KnowUsCard";
import logo1 from "../../hot-onion-restaurent-resources/ICON/Group 245.png";
import img1 from "../../hot-onion-restaurent-resources/Image/adult-blur-blurred-background-687824.png";
import logo2 from "../../hot-onion-restaurent-resources/ICON/Group 1133.png";
import img2 from "../../hot-onion-restaurent-resources/Image/chef-cook-food-33614.png";
import logo3 from "../../hot-onion-restaurent-resources/ICON/Group 204.png";
import img3 from "../../hot-onion-restaurent-resources/Image/architecture-building-city-2047397.png";

const WhyYouChooseUs = () => {
  return (
    <Grid container>
      <Grid item md={1} xs={false}></Grid>
      <Grid container item md={10} xs={12}>
        <Grid className="WhyYouChooseUs" item xs={12}>
          <h3>Why You choose Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sequi ut quo aperiam voluptatibus totam sed quibusdam ex velit
            laudantium illum, corrupti vero veritatis asperiores! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Vero dolore non, sequi
            unde at aspernatur totam ex voluptas itaque minima earum, ut nobis
            tenetur impedit odit officiis mollitia provident quam!
          </p>
        </Grid>
        <Grid className="knowMoreCart" item lg={4} md={6} xs={12}>
          <RecipeReviewCard title={"Fast Delivery"} logo={logo1} img={img1} />
        </Grid>
        <Grid className="knowMoreCart" item lg={4} md={6} xs={12}>
          <RecipeReviewCard
            title={"A Good Auto Responder"}
            logo={logo2}
            img={img2}
          />
        </Grid>
        <Grid className="knowMoreCart" item lg={4} md={6} xs={12}>
          <RecipeReviewCard title={"Home Delivery"} logo={logo3} img={img3} />
        </Grid>
      </Grid>
      <Grid item md={1} xs={false}></Grid>
    </Grid>
  );
};

export default WhyYouChooseUs;
