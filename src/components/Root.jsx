import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import appHistory from 'configs/app.history';
import { routes } from 'configs/app.routes';

const Root = () => (
    <Router history={appHistory}>
        <Switch>
            <Route path={routes.landing} render={() => <div>GrantPuma</div>} />
        </Switch>
    </Router>
);

export default Root;
