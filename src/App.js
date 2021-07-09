import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const App = () => {

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    const responseGoogle = (res) => {
        console.log(res)
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('tokenid', res.tokenId)
    }
    const errorGoogle = (err) => {
        console.log(err);
    }

    const handleTokenVerify = () => {
        axios.get('https://oauth2.googleapis.com/tokeninfo?id_token=' + localStorage.getItem('tokenid') ).then(
            (res) => {
                console.log('success google response')
                console.log(res)
            })
            .catch(
                (err) => {
                    console.log('error google response')
                    console.log(err)
                }
            )
    }
    const handleTokenLocalClear = () => {
        localStorage.clear('token')
        localStorage.clear('tokenid')
        console.log('all cleared')
    }

  

    
    return (
        <div className='container'>
        <div className='row'>
        <div className='col-12'>
         Local Token: {localStorage.getItem('token')}
         <br /><br />
         Local Token Id: {localStorage.getItem('tokenid')}

        </div>
        <div className='col-12'>
            <div className='p-1'>
            <GoogleLogin
                className='btn btn-warning'
                clientId='355753126343-icpj43hvttb9u7ib1bm92j8ovqsid85a.apps.googleusercontent.com'
                buttonText='Get Token'
                onSuccess={responseGoogle}
                onFailure={errorGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
            <div className='p-1'><buttom onClick={() => handleTokenVerify()} className='btn btn-secondary'>Verify Token</buttom></div>
            <div className='p-1'><buttom onClick={() => handleTokenLocalClear()} className='btn btn-danger'>Clear Local Token</buttom></div>
        </div>
        </div>
        </div>
    )
}

export default App
