import { Container, Grid ,Divider,Box} from "@mui/material";
import Typography from '@mui/material/Typography';
import React from "react";
import {
  EnhancedTable,
  RoutesPicsList,
  CountryRouteReviewCard,
} from "../components";

const HomePage = () => {
  return (
    <Container maxWidth="lg" className="home-page">

      <h1 style={{marginBottom:'100'}}>Welcome to Soltickets!</h1>

<Box sx={{width: 300,
        height: 300}}>
      <Typography variant="body1" color="white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
</Box>

      <Grid container spacing={3} sx={{mt:50, mb:10}}>
        <Grid xs={4} >

        <CountryRouteReviewCard
        travelRoute={"Amazonian Route"}
        travelLink={"amazonianroute"}
        picLink={
          "https://turismoi.pe/uploads/photo/version3/photo_file/71802/optimized_kuelap_1.jpg"
        }
      />
        </Grid>

        <Grid xs={4} >
  
        <CountryRouteReviewCard
        travelRoute={"Inca Route"}
        travelLink={"incaroute"}
        picLink={
          "https://viajes.nationalgeographic.com.es/medio/2022/08/31/machu-picchu_8c3f78f9_800x800.jpg"
        }
      />
        </Grid>


        <Grid xs={4} >
        <CountryRouteReviewCard
        travelRoute={"Religious Route"}
        travelLink={"religiousroute"}
        picLink={
          "https://sobre-peru.com/wp-content/uploads/catedral-de-lima.jpg"
        }
      />
        </Grid>

        <Grid xs={4} >
        <CountryRouteReviewCard
        travelRoute={"Historic centre"}
        travelLink={"historiccentre"}
        picLink={
          "https://www.peru.travel/Contenido/Atractivo/Imagen/es/14/1.1/Principal/centro-historico-de-lima.jpg"
        }
      />
        </Grid>

        <Grid xs={4} >
        <CountryRouteReviewCard
        travelRoute={"Hispter Route"}
        travelLink={"religiousroute"}
        picLink={
          "https://www.peru.travel/Contenido/General/Imagen/es/500/1.1/Barranco_distrito_portada.jpg"
        }
      />
        </Grid>




      </Grid>

     

      
    </Container>
  );
};

export default HomePage;

/* 
Muchos de los extranjeros que visitan perú llegan a lima con el propósito de hacer
 transbordo a cuzco y los días que se quedan en lima no saben qué hacer. Nuestra misión es conectar 
 el turismo de las ciudades del perú con rutas e  itinerarios más dinámicos, para ello tenemos un equipo 
 multidisciplinario como t.i y negocios donde en la actualidad no hay empresas que se dediquen a fomentar el 
 turismo peruano de la manera como lo hemos mapeado 
Nosotros como soltickets fomentamos los destinos turís
 */
