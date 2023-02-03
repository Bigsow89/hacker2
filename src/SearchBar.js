import React from 'react'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <Grid container spacing={3}>
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:  "center"}}>
      <TextField
        label="Search Term"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        sx={{width: '50%'}} 
      />
      <Button variant="contained" onClick={handleSearch} style={{ marginTop: 20 }}>
        Search
      </Button>
    </Grid>
  </Grid> 
  )
}

export default SearchBar