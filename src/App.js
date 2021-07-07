import { Box, Container, Grid } from '@material-ui/core';
import Sidebar from './Sidebar'
import Pages from './Pages'

function App() {
  return (
    <Container maxWidth="md">
      <Box className='frame'>
        <Grid container className='borderArea'>
          <Grid item xs={6} className='test'>test
            <model-viewer src="ElectricScooter.glb" disable-zoom alt="3d" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate
              interaction-prompt="none"
              shadow-intensity="1" shadow-softness="1"
              auto-rotate-delay="0" rotation-per-second="500%"
              camera-controls></model-viewer>
          </Grid>
          <Grid item xs={6} className='bgArea'>
            <Pages />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
