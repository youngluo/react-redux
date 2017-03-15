import React from 'react';
import { Router, Route, Redirect, IndexRedirect, hashHistory } from 'react-router';
import Root from '../components/layout';
import dashboard from '../pages/dashboard';

const user = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../pages/user').default)
    }, 'user')
}

const routes = (
    <Route path="/" component={Root}>
        <IndexRedirect to="dashboard" />
        <Route path="dashboard" component={dashboard} />
        <Route path="user" getComponent={user} />
        <Redirect from='*' to='/' />
    </Route>
);

export default () => <Router history={hashHistory} routes={routes} />;