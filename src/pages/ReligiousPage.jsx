import React from "react";
import { RoutesPicsList } from "../components";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  UploadButtons,
  SimpleMap,
  ButtonLocation,

} from "../components";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ReligiousPage = (props) => {
  const { user } = props;

  return (
    <Container>
      <Typography variant="h3" color="white" sx={{ mt: 10, mb: 10 }}>
        Religious Route
      </Typography>

      <div
        style={{
          display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          width: "100%",
        }}
      >
        {user ? (
          <>
            <UploadButtons />
            <ButtonLocation />
          </>
        ) : (
          <>
          <Stack sx={{ my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }} spacing={2}>
      <Alert severity="warning">For displaying full content of this page, you need to sign up / log in</Alert>
    </Stack>
          </>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <RoutesPicsList />
      </div>

      <Container maxWidth="lg">
        <SimpleMap />
      </Container>

      <Container>
        <Typography variant="h6" color="white" sx={{ mt: 10, mb: 10 }}>
          What is This Route About?
        </Typography>

        <Typography variant="body1" color="white" sx={{ mt: 1, mb: 1 }}>
          Our Tour begins at the Minor Basilica and Convent of Our Lady of Mercy
          located at 621 Jirón de la Unión. There, the Virgen de las Mercedes,
          patron saint of the Peruvian Armed Forces, is venerated.
        </Typography>

        <Typography variant="body1" color="white" sx={{ mt: 1, mb: 1 }}>
          As a second point we have the Church of Santo Domingo, located in the
          first block of Jirón Camaná. It here the remains of Santa Rosa de
          Lima.
        </Typography>
        <Typography variant="body1" color="white" sx={{ mt: 1, mb: 1 }}>
          Our third point is Las Nazarenas: Restored on numerous occasions after
          being affected by several earthquakes. Located in Jirón Huancavelica
          then we will make a short stop to taste the famous Turrón de doña
          pepa.
        </Typography>
        <Typography variant="body1" color="white" sx={{ mt: 1, mb: 1 }}>
          Our next point will be the San Francisco convent. Inside it has a
          museum where it preserves and exhibits one of the most representative
          historical and artistic collections of Peruvian colonials virreinal
          art.
        </Typography>
        <Typography variant="body1" color="white" sx={{ mt: 1, mb: 1 }}>
          As a main point our Cathedral of Lima, which is the biggest in Peru.
          In front of the Plaza de armas Lima whose around it is the
          municipality of lima and the government palace. we will have a moment
          to take pictures and tell the stories.
        </Typography>
        <Typography variant="body1" color="white" sx={{ mt: 1, mb: 1 }}>
          Then we will go to the Virgen del Pilar located in San Isidro. It was
          built in 1937 after the owners of the Casa Hacienda de San Isidro
          welcomed the order of the Passionist Missionaries and donated land for
          the construction of the Community House and the Temple.
        </Typography>
        <Typography variant="body1" color="white" sx={{ mt: 1, mb: 1 }}>
          And our last point will be La Iglesia de la Virgen Milagrosa Located
          in the Central Park of Miraflores, it was designed by the architect
          Ricardo de Jaxa Malachowski and built on the basis of the old church
          called San Miguel de Miraflores.
        </Typography>
      </Container>
    </Container>
  );
};

export default ReligiousPage;
