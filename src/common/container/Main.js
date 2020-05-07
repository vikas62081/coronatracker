import React, { useEffect } from 'react'
import { getDataFromAPI } from '../actions/dataActions'
import { useDispatch } from 'react-redux'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from '../routes/Routes'
import Header from '../components/layout/Header'
function Main() {
    const dispatch = useDispatch()
    useEffect(() => {
        getDataFromAPI(dispatch);
    },[])
    return (
        <div>
            <Router>
            <Header />
                <Switch>
                    {routes.map((route) => <Route key={route.path} {...route} />)}
                </Switch>
            </Router>
        </div>
    )
}

export default Main
