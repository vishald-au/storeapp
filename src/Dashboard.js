import { useEffect } from 'react';
import Logout from './Logout';



const Dashboard = ({ handleTokenLocalClear, checkLogin }) => {

    useEffect(() => {
        checkLogin();
    },)

    return (
        <div className='borderArea-white'>
            <div>
            dash
            <Logout handleTokenLocalClear={handleTokenLocalClear} />
            </div>
        
        </div>
    )
}

export default Dashboard
