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
                    clientId='355753126343-icpj43hvttb9u7ib1bm92j8ovqsid85a.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={responseGoogle}
                    onFailure={errorGoogle}
                    cookiePolicy={'single_host_origin'}
                />}
        </div>
    )
}

export default Signin
