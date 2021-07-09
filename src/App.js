import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard'
import GoogleLogin from 'react-google-login';


const Login = () => {

    const [ dash, setDash] = useState(0)
    const [ localToken, setLocalToken] = useState()

    const responseGoogle = (res) => {
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('tokenid', res.tokenId)
        setLocalToken(res.tokenId)
    }
    const errorGoogle = (err) => {
        console.log(err);
    }
 
    const handleTokenLocalClear = () => {
        localStorage.clear('token')
        localStorage.clear('tokenid')
        window.location.href = "/";
    }


    return (
        <div>

            <Router>
                {/* <Link to='/'>Login</Link><br />
                <Link to='/dashboard'>Dashboard</Link><br /> */}

                <br />
                <Switch>
                    <Route exact path='/'>
                  {localStorage.getItem('token') ? <Redirect to='/dashboard' /> : 
                        <GoogleLogin
                            className='btn btn-warning'
                            clientId='355753126343-icpj43hvttb9u7ib1bm92j8ovqsid85a.apps.googleusercontent.com'
                            buttonText='Login'
                            onSuccess={responseGoogle}
                            onFailure={errorGoogle}
                            cookiePolicy={'single_host_origin'}
                        />}
                    </Route>
                    <Route path='/dashboard'>
                        <Dashboard handleTokenLocalClear={handleTokenLocalClear}/>
                    </Route>
                </Switch>
            </Router>


        </div >
    )
}

export default Login
