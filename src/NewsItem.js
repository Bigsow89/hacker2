import React from 'react'
import { Grid } from '@mui/material'

const NewsItem = ({ result }) => {
  return (
    <Grid container spacing={3} style={{ marginTop: 20 }}>
    <Grid item xs={12}>
      <div className='item'>
      <h3>{result.title}</h3>
      <p>Points:{result.points}</p>
      <p>By:{result.author}</p>
      <a href={result.url? result.url : "no link"}>See More</a>
      </div>
      
    </Grid>
  </Grid>
  )
}

export default NewsItem