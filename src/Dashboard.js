import { useState, useEffect } from 'react';
import UserBar from './UserBar';
import Pages from './Pages';


const Dashboard = ({ handleTokenLocalClear, checkLogin, tempToken, userData }) => {

    useEffect(() => {
        checkLogin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [imgLink, setImgLink] = useState('')
    const [color1, setColor1] = useState(false)
    const [color2, setColor2] = useState(false)
    const [color3, setColor3] = useState(false)

    const handleColor = (props) => {
        console.log(props)
        if (props === '1') {
            console.log('color 1 selected')
            setColor1(true)
            setImgLink('red.jpeg')
            setColor2(false)
            setColor3(false)
        }
        if (props === '2') {
            console.log('color 2 selected')
            setColor2(true)
            setImgLink('gray.jpeg');
            setColor1(false)
            setColor3(false)
        }
        if (props === '3') {
            console.log('color 3 selected')
            setColor3(true)
            setImgLink('');
            setColor2(false)
            setColor1(false)
        }

        console.log(props)
    }


    return (
        <div className='container-fluid'>

            {/*  <div className='col-12'>

                <div className='fullTextBack'><h1>BEAN</h1></div>

            </div> */}

            {tempToken && <div className='row'>



                <div className='col-6 p-5'>

                    <model-viewer src="ElectricScooter.glb" disable-zoom alt="3d" ar ar-modes="webxr scene-viewer quick-look" environment-image={imgLink} auto-rotate
                        interaction-prompt="none"
                        shadow-intensity="1" shadow-softness="1"
                        auto-rotate-delay="0" rotation-per-second="500%"
                        camera-controls></model-viewer>

                </div>
                <div className='col-6'>

                    <Pages color1={color1} color2={color2} color3={color3} handleColor={handleColor} />

                </div>

                {/* <UserBar userData={userData} handleTokenLocalClear={handleTokenLocalClear} /> */}

            </div>}

        </div>
    )
}

export default Dashboard
