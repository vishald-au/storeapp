import UserBar from './UserBar';
import { useEffect } from 'react';

const Task = ({ handleTokenLocalClear, checkLogin, tempToken, userData }) => {

    useEffect(() => {
        checkLogin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

 

    return (
        <div>
             {tempToken &&  <div>
            Task...
            
            
            <UserBar userData={userData} handleTokenLocalClear={handleTokenLocalClear} />


            </div>}
        
        </div>
    )
}

export default Task
