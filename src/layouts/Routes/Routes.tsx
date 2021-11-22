import React from 'react'
import { Route, Switch } from 'react-router-dom';
import store from '../../utils/store';
import UnauthenticatedLayout from '../LoginLayout';
import LoginForm from '../LoginLayout/LoginForm';
import RegisterForm from '../LoginLayout/RegisterForm';
import MainLayout from '../mainlayout/MainLayout';
import protectedComponent from './protectedComponent';

function Routes() {
    return (
        <Switch>
            <Route path="/login" component={UnauthenticatedLayout(LoginForm)} />
            <Route path="/register" component={UnauthenticatedLayout(RegisterForm)} />
            <Route path="/" component={protectedComponent(MainLayout, store)} />
        </Switch>
    )
}

export default Routes
