import GoogleLogin from 'react-google-login';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home'
import axios from 'axios'




const Login = () => {

 


    const responseGoogle = (res) => {
        localStorage.setItem('token', res.tokenId);
        // console.log(res.tokenId);
    }

    const errorGoogle = (err) => {
        console.log(err);
    }

 


    return (
        <div>

            <Router>
                <Switch>
                    <Route exact path='/'>
                        <GoogleLogin
                            clientId='355753126343-icpj43hvttb9u7ib1bm92j8ovqsid85a.apps.googleusercontent.com'
                            buttonText='Login'
                            onSuccess={responseGoogle}
                            onFailure={errorGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                </Switch>
                <br />
                <br />
                <button onClick={() => localStorage.clear()}>Clear Token</button>
                <br />
                <button onClick={() => console.log(localStorage.getItem('token'))}>Print Token</button>
                <br />
                <br />
                <Link to='/'>Back</Link>
                <br />
                <Link to='/home'>Home</Link>
            </Router>


        </div >
    )
}

export default Login
