
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const notLogged = () => {
  return (


    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning">For displaying full content of this page, you need to sign up / log in</Alert>
    </Stack>

  )
}

export default notLogged;