import React from 'react'
import Logout from './Logout';

const UserBar = ({ userData, handleTokenLocalClear }) => {

    if(!userData) {
        window.location.href = "/";
    }

    return (
        <div>
                <div className='card fixfix p-2'>
                    <div className='row'>
                        <div className='col-4'>
                            <img alt='google' className='card-img-top' src={userData.img} />
                        </div>
                        <div className='col-4 text-center'>
                            <Logout handleTokenLocalClear={handleTokenLocalClear} />
                        </div>
                        <div className='col-4 text-right'>
                            <p className='card-text'>{userData.email}</p>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default UserBar
