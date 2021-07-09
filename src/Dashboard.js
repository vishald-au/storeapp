import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({handleTokenLocalClear}) => {

    if (!localStorage.getItem('tokenid')) {
        window.location.href = "/";
    } else {
        axios.get('https://oauth2.googleapis.com/tokeninfo?id_token=' + localStorage.getItem('tokenid') ).then(
            (res) => {
                console.log('success google response')
                console.log(res)
            })
            .catch(
                (err) => {
                    console.log('error google response')
                    console.log(err)
                    window.location.href = "/";
                }
            )
    }



    return (
        <div>
            dash
            <div className='p-1'><buttom onClick={() => handleTokenLocalClear()} className='btn btn-danger'>Logout</buttom></div>
        </div>
    )
}

export default Dashboard
