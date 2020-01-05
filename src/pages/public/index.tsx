import React, { PureComponent } from 'react';
import {Route, Switch} from 'react-router-dom';
import ShowCase from './components/showCase';
import Login from './components/login';
import Register from './components/register';
import ScrollToTop from './components/ScrollToTop';

export default class Public extends PureComponent<{},{}>{
    render(){
        return(
            <ScrollToTop>
                <Switch>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/' component={ShowCase}/> 
                </Switch>
            </ScrollToTop>
        );
    };
}