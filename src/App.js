import GoogleLogin from 'react-google-login';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home'



const Login = () => {


const [ moveLogin, setMoveLogin] = useState(false)
 

    const responseGoogle = (res) => {
        setMoveLogin(true);
        console.log(moveLogin);
      }
    
      const errorGoogle = (err) => {
          console.log(err);
      } 

     
      
    return (
        <div>
             <Router>
                <Link to='/'>LOGIN</Link>
                <Link to='/home'>HOME</Link>
                <Switch>
                    <Route exact path='/'>
                        {!moveLogin ? <GoogleLogin
                            clientId='355753126343-icpj43hvttb9u7ib1bm92j8ovqsid85a.apps.googleusercontent.com'
                            buttonText='Login'
                            onSuccess={responseGoogle}
                            onFailure={errorGoogle}
                            cookiePolicy={'single_host_origin'}
                        /> : <Redirect to='/home' />}
                    </Route>
                    <Route exact path='/home' >
                        <Home moveLogin={moveLogin} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Login
