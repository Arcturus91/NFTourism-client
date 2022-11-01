import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import Alert from '@mui/material/Alert';




const ButtonLocation = () => {

    const [location, setLocation] = useState(undefined)

    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation
            .getCurrentPosition(({ coords: { latitude, longitude } }) => {
              const coords = {
                lat: latitude,
                lng: longitude,
              };
              setLocation(coords);
            })
        }
      };


  return (
    <Stack spacing={2} direction="row">

{!location ? (
    <>
    <Button onClick={getLocation} variant="contained">Register your location</Button>
        
    </>):(<Stack sx={{ width: '100%' }} spacing={2}>

<Alert severity="success">Location registered</Alert>
</Stack>)}


      

      
    </Stack>
  )
}

export default ButtonLocation

//location recorded : {lat: -12.094325060893969, lng: -77.05357763965043}

//for an MVP, it should says: location recorded and picture sent, we will contact you soon for your NFT and cashback.
//Meanwhile, play as an administrator for sending Solanas to other wallets. Go to login section.