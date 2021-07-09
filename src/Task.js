import Logout from './Logout';
import { useEffect } from 'react';

const Task = ({handleTokenLocalClear, checkLogin}) => {

    useEffect(() => {
        checkLogin();
    },)

 

    return (
        <div className='borderArea-white'>
            <div>
            Task...
            <Logout handleTokenLocalClear={handleTokenLocalClear} />
            </div>
        
        </div>
    )
}

export default Task
