import { Box, Container, Grid, Paper } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="sm" className='borderArea'>
        <Box className='frame'>
          <Grid container>
          <Grid item xs={4}>
              <Paper className='equalHeight navArea' elevation={0} square>TEST</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className='equalHeight' elevation={0} square>TEST</Paper>
            </Grid>
          </Grid>
        </Box>
    </Container>
  );
}

export default App;
