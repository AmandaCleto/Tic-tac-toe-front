import React, { PureComponent } from 'react';
import {Route, Switch} from 'react-router-dom';
import ShowCase from './components/showCase';
import Login from './components/login';
import Register from './components/register';

export default class Public extends PureComponent<{},{}>{
    render(){
        return( 
            <Switch>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/' component={ShowCase}/> 
            </Switch>
        );
    };
}