import { Container } from '@mui/material'
import React from 'react'
import  {EnhancedTable, RoutesPicsList} from '../components'

const HomePage = () => {
  return (
    <Container maxWidth="md">
    
    <h1>Welcome to Soltickets!</h1>

    <RoutesPicsList/>
    
    <EnhancedTable/>
    
     </Container>
  )
}

export default HomePage