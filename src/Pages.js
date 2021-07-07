import {Switch, Slider, ButtonGroup, Button, Tooltip, IconButton, Menu, MenuItem, FormGroup, FormControlLabel } from '@material-ui/core'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react'


const Pages = () => {

    const marks = [
        {
            value: 6,
            label: 'Small'
        },
        {
            value: 8,
            label: 'Medium'
        },
        {
            value: 10,
            label: 'Large '
        },
        {
            value: 12,
            label: 'xLarge '
        }
    ]

    const options = [
        'Home',
        'Shop',
        'Contact'
    ]

    const [ anchorEl, setAnchorEl ] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSwitch = (e) => {
        setCheckedSwitch(e.target.checked)
        console.log(checkedSwitch)
    }

    const [color1, setColor1] = useState(false)
    const [color2, setColor2] = useState(false)
    const [color3, setColor3] = useState(false)

    const handleColor = (props) => {
        console.log(props)
        if (props === '1') {
            console.log('color 1 selected')
            setColor1(true)
            setColor2(false)
            setColor3(false)
        } 
        if (props === '2') {
            console.log('color 2 selected')
            setColor2(true)
            setColor1(false)
            setColor3(false)
        }
        if (props === '3') {
            console.log('color 3 selected')
            setColor3(true)
            setColor2(false)
            setColor1(false)
        }

        console.log(props)
    }

    const [checkedSwitch, setCheckedSwitch] = useState(true)

    const [checkout, setCheckout] = useState(0)

    return (
        <div className='pagesArea'>

        <div className='smallMenu'>

            <IconButton onClick={handleClick}>
               <MoreVertIcon />
            </IconButton>
            <Menu 
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((menu, index) => (
                    <MenuItem key={index} onClick={handleClose}>{menu}</MenuItem>
                ))}
            </Menu>

        </div>

            <h2>Product</h2>

            <br />
            <br />
            <br />
            <br />
                    Settings
            <Switch color='dark' size='small' checked={checkedSwitch} onChange={handleSwitch} />
             
            

            <br />
            <br />
            <br />
            <br />
            <br />
 
        {checkedSwitch && 
        <div>
            <Slider
                defaultValue={8}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks={marks}
                min={6}
                max={12}
                className='customSliderDark'
             />

            <br />
            <br />
            <br />
            <br />
          
           
                <Tooltip title="Brown">
                    <Button variant="contained" className={color1 ? 'customBrown sizeMin selected' : 'customBrown sizeMin'} onClick={(e) => handleColor('1')}></Button>
                </Tooltip>
                <Tooltip title="Grey">
                    <Button variant="contained" className={color2 ? 'customGrey sizeMin selected' : ' customGrey sizeMin'} onClick={(e) => handleColor('2')}></Button>
                </Tooltip>
                <Tooltip title="White">
                    <Button variant="contained" className={color3 ? 'customLight sizeMin selected' : ' customLight sizeMin'} onClick={(e) => handleColor('3')}></Button>
                </Tooltip>
            
            
            <br />
            <br />
            <br />
            <br />

            Price $25

            <br />
            <br />
            <br />
            <br />

            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button className='customDark' onClick={() => setCheckout(checkout++)}>Add to Cart</Button>
                <Tooltip title="View Cart">
                    <Button className='customWhite'><LocalMallIcon /> ({checkout})</Button>
                </Tooltip>
            </ButtonGroup>
            
 
            </div>
        }

        </div>
    )
}

export default Pages
