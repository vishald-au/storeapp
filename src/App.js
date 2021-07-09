import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard'
import Singin from './Signin'
import Task from './Task'
import axios from 'axios';
import Logout from './Logout';


const Login = () => {


    const [ tempToken , setTempToken] = useState()
    const [ userData , setUserData] = useState()

    const handleTokenLocalClear = () => {
        localStorage.clear()
        setTempToken()
        setUserData()
        window.location.href = "/";
    }

    const checkLogin = () => {
        if (!localStorage.getItem('tokenid')) {
            window.location.href = "/";
        } else {
            axios.get('https://oauth2.googleapis.com/tokeninfo?id_token=' + localStorage.getItem('tokenid') ).then(
                (res) => {
                    console.log('success google response')
                    localStorage.setItem('loginStatus', true)
                    console.log(res)
                    setUserData({
                        name: res.data.name,
                        email: res.data.email,
                        img: res.data.picture
                    })
                    setTempToken(true)
                })
                .catch(
                    (err) => {
                        console.log('error google response')
                        console.log(err)
                        window.location.href = "/";
                    }
                )
        }
    }

    return (
        <div>
 

                <Router>
                    {!localStorage.getItem('loginStatus') && <Link className='linkColor m-1' to='/'>Login</Link>}
                    <Link className='linkColor m-1' to='/dashboard'>Dashboard</Link> 
                    <Link className='linkColor m-1' to='/task'>Task</Link> 

                    <div className='borderArea-white'>
                        <Switch>
                            <Route exact path='/'>
                                <Singin Redirect={Redirect} />
                            </Route>
                            <Route path='/dashboard'>
                                <Dashboard userData={userData} tempToken={tempToken} checkLogin={checkLogin} handleTokenLocalClear={handleTokenLocalClear} />
                            </Route>
                            <Route path='/task'>
                                <Task userData={userData} tempToken={tempToken} checkLogin={checkLogin} handleTokenLocalClear={handleTokenLocalClear} />
                            </Route>
                        </Switch>
                    </div>
                </Router>

               {/*  <Logout handleTokenLocalClear={handleTokenLocalClear} /> */}

        
        </div>
    )
}

export default Login
