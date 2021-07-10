import GoogleLogin from 'react-google-login';
import { useState } from 'react';

const Signin = ({ Redirect }) => {

    const [localToken, setLocalToken] = useState()

    const responseGoogle = (res) => {
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('tokenid', res.tokenId)
        localStorage.setItem('loginStatus', true)
        setLocalToken(res.tokenId)
        console.log(localToken)

    }
    const errorGoogle = (err) => {
        console.log(err);
    }

    return (
        <div className='new-dark'>
            {localStorage.getItem('token') ? <Redirect to='/dashboard' /> :
                <GoogleLogin
                    className='google-login'
                    clientId='998983159820-0602akq04mlcbjpjhjgcopv9377eg1hc.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={responseGoogle}
                    onFailure={errorGoogle}
                    cookiePolicy={'single_host_origin'}
                />}
        </div>
    )
}

export default Signin
