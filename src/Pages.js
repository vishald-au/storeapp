import { Switch, Slider, ButtonGroup, Button, Tooltip } from '@material-ui/core'
import { useState } from 'react'


const Pages = ({ handleCounter, cartCounter, handleColor, color1, color2, color3 }) => {

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



    const [checkedSwitch, setCheckedSwitch] = useState(true)

    return (

        <div className='pagesArea'>


            <div>


                <div className='applyFlex p-3'>
                    <div className='applyFlex1'>
                        <div className='prizeArea2'><h1><span>$</span>725</h1></div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec neque neque. Integer metus nulla, interdum in congue non, semper sit amet mi. Duis vel faucibus nulla. Vivamus mattis ipsum et mauris imperdiet elementum</p>

                        <div className='customizeArea'>Customize < Switch className='colorSwitch' checked={checkedSwitch} onChange={handleSwitch} /></div>
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
                            <Button className='customDark'>Add to Cart</Button>

                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Pages
