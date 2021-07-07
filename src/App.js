import { Box, Container, Grid, Paper } from '@material-ui/core';
import Sidebar from './Sidebar'

function App() {
  return (
    <Container maxWidth="lg" className='borderArea'>
        <Box className='frame'>
          <Grid container>
          <Grid item xs={4}>
                <Sidebar />
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
