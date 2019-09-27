import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './privateRoute'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'
import Users from './pages/Dashboard/Users/users'
import UsersCreate from './pages/Dashboard/Users/usersCreate'
import UsersEdit from './pages/Dashboard/Users/usersEdit'
import Forms from './pages/Dashboard/forms'
import Questions from './pages/Dashboard/questions'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute path="/users/create" component={UsersCreate} />
        <PrivateRoute path="/users/:id" component={UsersEdit} />
        <PrivateRoute path="/forms" component={Forms} />
        <PrivateRoute path="/questions" component={Questions} />
    </Switch>
)

export default Routes