import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import App from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['loggedIn'] ? true : false
 }
console.log(cookie, checkAuth(), "thursday")
//  const checkAuth = () => true
// Check the cookies for a cookie called "loggedIn"



// Write ProtectedRoute function here

const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route 
        {...rest}
        render ={(props) => checkAuth() === true
            ? <Component {...props} />
            : <Redirect to = {{pathname: '/login', state: {from: props.location }}} />}
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router;