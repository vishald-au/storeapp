import { useState, useEffect } from 'react';
import UserBar from './UserBar';
import { Box, Container, Grid } from '@material-ui/core';
import Pages from './Pages'


const Dashboard = ({ handleTokenLocalClear, checkLogin, tempToken, userData }) => {

    useEffect(() => {
        checkLogin();
    }, [])

    const [cartCounter, setCartCounter] = useState(2)

    const handleCounter = () => {
        setCartCounter(cartCounter + 1)
    }

    return (
        <div className='container-fluid'>


            {tempToken && <div className='row'>



                <div className='col-6'>

                    <model-viewer src="ElectricScooter.glb" disable-zoom alt="3d" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate
                        interaction-prompt="none"
                        shadow-intensity="1" shadow-softness="1"
                        auto-rotate-delay="0" rotation-per-second="500%"
                        camera-controls></model-viewer>

                </div>
                <div className='col-6'>

                    <Pages handleCounter={handleCounter} cartCounter={cartCounter} />

                </div>

                <UserBar userData={userData} handleTokenLocalClear={handleTokenLocalClear} />

            </div>}

        </div>
    )
}

export default Dashboard
