import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>

    <Box display="flex" flexDirection="column" allignItems="center">
      <Button
      LinkComponent={Link}  to="/books"
       sx={{marginTop:15, background:'orangered'}} 
      
      variant ="contained">
        <Typography variant="h3">View All Products</Typography>
      </Button>
    </Box>
    
    
    
    
    </div>
  )
}
