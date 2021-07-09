import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard'
import Singin from './Signin'
import Task from './Task'
import axios from 'axios';


const Login = () => {


    const [ tempToken , setTempToken] = useState()

    const handleTokenLocalClear = () => {
        localStorage.clear()
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
                    {!localStorage.getItem('loginStatus') && <Link to='/'>Login</Link>}
                    <br />
                    <Link to='/dashboard'>Dashboard</Link><br />
                    <Link to='/task'>Task</Link><br />

                    <br />
                    <Switch>
                        <Route exact path='/'>
                            <Singin Redirect={Redirect} />
                        </Route>
                        <Route path='/dashboard'>
                            <Dashboard checkLogin={checkLogin} handleTokenLocalClear={handleTokenLocalClear} />
                        </Route>
                        <Route path='/task'>
                            <Task checkLogin={checkLogin} handleTokenLocalClear={handleTokenLocalClear} />
                        </Route>
                    </Switch>
                </Router>


        
        </div >
    )
}

export default Login
