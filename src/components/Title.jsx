// import Box from '@mui/material/Box';
import * as React from 'react';
import titleLogo from '../title.svg';
import Grid from '@mui/material/Grid';

function Title () {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '86.5vh' }}
    >
      <Grid item xs={3}>
        <img src={titleLogo} className="App-logo" alt="logo" width='100%' height='auto'/>
      </Grid>
    </Grid>

  );
}

export default Title;