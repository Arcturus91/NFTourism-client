import { Container, Grid ,Divider} from "@mui/material";
import React from "react";
import {
  EnhancedTable,
  RoutesPicsList,
  CountryRouteReviewCard,
} from "../components";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <h1 style={{marginBottom:'100'}}>Welcome to Soltickets!</h1>





      <Grid container spacing={3} sx={{mb:10}}>
        <Grid xs={4} >

        <CountryRouteReviewCard
        travelRoute={"Amazonian Route"}
        picLink={
          "https://turismoi.pe/uploads/photo/version3/photo_file/71802/optimized_kuelap_1.jpg"
        }
      />
        </Grid>

        <Grid xs={4} >
  
        <CountryRouteReviewCard
        travelRoute={"Inca Route"}
        picLink={
          "https://viajes.nationalgeographic.com.es/medio/2022/08/31/machu-picchu_8c3f78f9_800x800.jpg"
        }
      />
        </Grid>
        <Grid xs={4} >
        <CountryRouteReviewCard
        travelRoute={"Religious Route"}
        picLink={
          "https://sobre-peru.com/wp-content/uploads/catedral-de-lima.jpg"
        }
      />
        </Grid>
      </Grid>
<Divider/>
      <EnhancedTable />
      <Divider/>
      <RoutesPicsList />

      
    </Container>
  );
};

export default HomePage;
