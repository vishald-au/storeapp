import { Box, Container, Grid } from '@material-ui/core';
import Pages from './Pages'
import { IconButton, Menu, MenuItem, Button } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState, useEffect } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

function Home() {




  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    'Home',
    'Shop',
    'Contact'
  ]

  const [cartCounter, setCartCounter] = useState(2)

  const handleCounter = () => {
    setCartCounter(cartCounter + 1)
  }

  if (localStorage.getItem('token') === null) {
    return <Redirect to='/' />
  }

  return (
    <Container maxWidth="md">
      <Box className='frame'>
        <Grid container className='borderArea'>test
          <div className='fullTextBack'><h1>BEAN</h1></div>
          <Grid item xs={12} className='navHead'>

            <div className='smallMenu'>
              <div className='cartIcon'><LocalMallIcon /><span className='cartValue'>{cartCounter > 0 && cartCounter}</span></div>
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {options.map((menu, index) => (
                  <MenuItem key={index} className='menuLi' onClick={handleClose}>{menu}</MenuItem>
                ))}
              </Menu>
            </div>
          </Grid>
          <Grid item xs={6} className='test'>
            TEST
            <br />
            <br />
            TEST
             {/* <model-viewer src="ElectricScooter.glb" disable-zoom alt="3d" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate
              interaction-prompt="none"
              shadow-intensity="1" shadow-softness="1"
              auto-rotate-delay="0" rotation-per-second="500%"
              camera-controls></model-viewer> */}
          </Grid>
          <Grid item xs={6} className='bgArea'>
            {/* <Pages handleCounter={handleCounter} cartCounter={cartCounter} /> */}
          </Grid>
          <Grid item xs={12} className='footer'>
            <Grid item xs={6} className='footerLeft'><ArrowRightAltIcon className='revertIcon' /></Grid>
            <Grid item xs={6} className='footerRight'><ArrowRightAltIcon /></Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
