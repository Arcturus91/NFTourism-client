import * as React from 'react';
import  {EnhancedTable} from '../components'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import BackpackIcon from '@mui/icons-material/Backpack';


const ProfilePage = (props) =>{
console.log(props.user)
return (

    

<Container maxWidth="md" >

<Stack direction="row" sx={{justifyContent: 'center',m:5}} >
      <Avatar 
      alt="user" 
      src="https://res.cloudinary.com/dad5dandd
/image/upload/w_1000,c_fill,ar_1:1,
g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1664030626/
AlpacaExchange/alpacaUserId2_km8k9e.png"
sx={{ width: 100, height: 100 }} />
    </Stack>

    <Divider />

    <Box sx={{ width: '100%', alignContent: 'center'  }} >
      <Typography variant="h2" gutterBottom>
        Welcome { props.user.firstName }
      
      </Typography>

      <Typography variant="h6" gutterBottom>
        
       <br/>
       ID: 63585b5980fd97a338d1af15
      </Typography>
      <Typography variant="h6" gutterBottom>
       
        <br/>
        Wallet Solana address number: xxxxxxxxxxx
      </Typography>
      <Typography variant="h6" gutterBottom>
        Check the route you wanna try <BackpackIcon/>
      </Typography>
      </Box>


    <EnhancedTable />


      </Container>


)


}

export default ProfilePage;


/* 

email: "arc70@gmai.com"
firstName: "art"
imageUrl: "https://res.cloudinary.com/dad5dandd
/image/upload/w_1000,c_fill,ar_1:1,
g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1664030626/
AlpacaExchange/alpacaUserId2_km8k9e.png"
lastName: "barra"



*/

