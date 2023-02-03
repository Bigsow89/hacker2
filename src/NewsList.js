import React from 'react'
import { CircularProgress } from '@mui/material';
import { Grid } from '@mui/material';
import NewsItem from './NewsItem';
const NewsList = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <CircularProgress style={{ marginTop: 20, display: 'block', margin: '0 auto' }} />
    );
  }

  return (
    <Grid container spacing={3}>
      {results.map(result => (
        <NewsItem key={result.objectID} result={result} />
      ))}
    </Grid>
  )
}

export default NewsList