import * as React from 'react';
import  {EnhancedTable} from '../components'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';


const ProfilePage = (props) =>{
console.log(props.user)
return (

    

<Container maxWidth="sm">

<Stack direction="row" sx={{justifyContent: 'center'}} >
      <Avatar 
      alt="user" 
      src="https://res.cloudinary.com/dad5dandd
/image/upload/w_1000,c_fill,ar_1:1,
g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1664030626/
AlpacaExchange/alpacaUserId2_km8k9e.png"
sx={{ width: 100, height: 100 }} />
    </Stack>

    <Divider />

    <EnhancedTable/>


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
role: "User"
_id: "63585b5980fd97a338d1af15"

*/

