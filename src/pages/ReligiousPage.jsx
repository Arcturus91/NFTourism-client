import React from 'react'
import {  RoutesPicsList
} from "../components";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import {UploadButtons} from '../components'




const ReligiousPage = (props) => {
console.log(props)
  const {user} = props

  return (
    <Container>

<Typography variant="h3" color="white" sx={{ mt: 10,mb:10 }}>
        Religious Route
      </Typography>
<div style={{ display: "flex", justifyContent: "center" }}>
<RoutesPicsList/>
</div>

<div style={{ display: "flex", justifyContent: "center" }}>


{user? (<UploadButtons/>
 ):null}




</div>


<Typography variant="body1" color="white" sx={{ mt: 10,mb:10 }}>

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mt: 10,mb:10 }}>

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
</Container>
  )
}

export default ReligiousPage