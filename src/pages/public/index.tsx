import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

export default () => {
    return ( 
        <Switch>
            <Route path='/' exact component={ShowCase}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
        </Switch>
    );
}