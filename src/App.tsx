import { createBrowserHistory } from 'history';
import React, { PureComponent } from 'react';
import Header from './components/header/header';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';

const history = createBrowserHistory();

export default class App extends PureComponent { 
  render() {
    return (
      <div className="App">
        <Header />
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Public} />
                <Route path='/gameboard' exact component={GameBoard}/>
            </Switch>
        </Router>

      </div>
    ); 
  } 
}



