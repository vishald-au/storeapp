import GoogleLogin from 'react-google-login';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home'
import axios from 'axios'




const Login = () => {



const [ moveLogin, setMoveLogin] = useState(false)
const [ myToken, setMyToken] = useState()
axios.defaults.headers.common['Authorization'] = myToken;


    const responseGoogle = (res) => {
        setMoveLogin(true);
        console.log(res.tokenId);
        setMyToken(res.tokenId);
      }
    
      const errorGoogle = (err) => {
          console.log(err);
      } 

     
      
    return (
        <div>
             
                 
             
                       <GoogleLogin
                            clientId='355753126343-icpj43hvttb9u7ib1bm92j8ovqsid85a.apps.googleusercontent.com'
                            buttonText='Login'
                            onSuccess={responseGoogle}
                            onFailure={errorGoogle}
                            cookiePolicy={'single_host_origin'}
                        />  
                        
                        
                        
                        
                    
                    
                        
                
        </div>
    )
}

export default Login
