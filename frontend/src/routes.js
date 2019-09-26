import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './privateRoute'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'
import Users from './pages/Dashboard/users'
import Forms from './pages/Dashboard/forms'
import Questions from './pages/Dashboard/questions'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/forms" component={Forms} />
        <PrivateRoute path="/questions" component={Questions} />
    </Switch>
)

export default Routes