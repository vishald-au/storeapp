import { Box, Container, Grid } from '@material-ui/core';
import Sidebar from './Sidebar'
import Pages from './Pages'

function App() {
  return (
    <Container maxWidth="lg" className='borderArea'>
        <Box className='frame'>
          <Grid container>
          <Grid item xs={4}>
               {/*  <Sidebar /> */}
            </Grid>
            <Grid item xs={8} className='bgArea'>
              <Pages />
            </Grid>
          </Grid>
        </Box>
    </Container>
  );
}

export default App;
