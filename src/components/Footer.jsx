import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
  
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/arturobarrantesv/">
        NFTurismPerú
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  
  );
}

export default function StickyFooter() {
  return (
<>
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[300]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Developer by Arturo Barrantes for Web Latam Hackathon 2022
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </>
  );
}