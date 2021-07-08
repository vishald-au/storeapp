import GoogleLogin from 'react-google-login';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";




const Login = () => {

    let history = useHistory();
      

    const [ move, setMove] = useState(false)

    useEffect(() => {
        move && history.push('/home');
    }, [move])

    const responseGoogle = (res) => {
        console.log(res);
        setMove(true)
      }
    
      const errorGoogle = (err) => {
          console.log(err);
      } 

      const handlePush = () => {
        history.push('/home');
      }
      
    return (
        <div>
             <Router>
             <Link to="/">LOGIN</Link>
             <Link to="/home">HOME</Link>
             <button onClick={() => handlePush()}>PUSH</button>
             <Switch>
                <Route exact path="/">
                            <GoogleLogin
                                clientId="355753126343-icpj43hvttb9u7ib1bm92j8ovqsid85a.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={errorGoogle}
                                cookiePolicy={'single_host_origin'}
                            />

                    </Route>
                    <Route exact path="/home">
                        <div>Hello!</div>
                    </Route>
                </Switch>
            
            </Router>
        </div>
    )
}

export default Login
