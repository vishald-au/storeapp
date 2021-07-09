import { useEffect } from 'react';
import UserBar from './UserBar';



const Dashboard = ({ handleTokenLocalClear, checkLogin, tempToken, userData }) => {

    useEffect(() => {
        checkLogin();
    },)

    return (
        <div>
          
{tempToken && <div>

    Dashboard...

    <UserBar userData={userData} handleTokenLocalClear={handleTokenLocalClear} />

    </div>}
          
        </div>
    )
}

export default Dashboard
