import React, { PureComponent } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ShowCase from './components/showCase';
import Login from './components/login';
import Register from './components/register';

export default class Public extends PureComponent<{},{}>{
    render(){
        return( 
            <Switch>
                <Route path='/' exact component={ShowCase}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
            </Switch>
        );
    };
}