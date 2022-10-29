import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import { Link } from "react-router-dom";

export default function SuccessAlert(props) {
    console.log("soy props desde el Solana input", props)
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>

      <Alert severity="success">Your Crypto currency was sent. 
      

<a href="https://solscan.io/token/ADcZkjWSuZxDV5hLCfdUm6yqoJwkN2otUKW2tyPVh1Rz?cluster=devnet" target="_blank">
Check it Here
        </a>
      
      </Alert>
    </Stack>
  );
}