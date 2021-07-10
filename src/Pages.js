import { Switch, Slider, ButtonGroup, Button, Tooltip, IconButton, Menu, MenuItem } from '@material-ui/core'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react'


const Pages = ({ handleCounter, cartCounter }) => {

    const marks = [
        {
            value: 6,
            label: '6e'
        },
        {
            value: 8,
            label: '8e'
        },
        {
            value: 10,
            label: '10e'
        },
        {
            value: 12,
            label: 'Xe'
        }
    ]




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


            <div>


                <div className='applyFlex'>
                    <div className='applyFlex1'>
                        <div className='prizeArea'>Price $25</div>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec neque neque. Integer metus nulla, interdum in congue non, semper sit amet mi. Duis vel faucibus nulla. Vivamus mattis ipsum et mauris imperdiet elementum</p>

                        <div className='customizeArea'>Customize < Switch size='small' checked={checkedSwitch} onChange={handleSwitch} /></div>
                    </div>
                    {checkedSwitch &&
                        <div className='applyFlex2'>
                            <div className='sliderArea'>
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
                            </div>
                            <div className='colorArea'>
                                <Tooltip title="Electric Red">
                                    <Button variant="contained" className={color1 ? 'customBrown sizeMin selected' : 'customBrown sizeMin'} onClick={(e) => handleColor('1')}></Button>
                                </Tooltip>
                                <Tooltip title="Grey">
                                    <Button variant="contained" className={color2 ? 'customGrey sizeMin selected' : ' customGrey sizeMin'} onClick={(e) => handleColor('2')}></Button>
                                </Tooltip>
                                <Tooltip title="White">
                                    <Button variant="contained" className={color3 ? 'customLight sizeMin selected' : ' customLight sizeMin'} onClick={(e) => handleColor('3')}></Button>
                                </Tooltip>

                            </div>
                        </div>
                    }

                    <div className='cartArea'>
                        <ButtonGroup variant="contained" aria-label="contained primary button group">
                            <Button className='customDark' onClick={() => handleCounter()}>Add to Cart</Button>

                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Pages
