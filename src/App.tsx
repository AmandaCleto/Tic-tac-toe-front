import { createBrowserHistory } from 'history';
import React, { PureComponent } from 'react';
import Header from './components/header/index';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Public from './pages/public'; 
import GameBoard from './pages/gameboard';

const history = createBrowserHistory();

export default class App extends PureComponent { 
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Header />
      
          <Switch>
            <Route path='/gameboard' exact component={GameBoard}/>
            <Route path='/' component={Public} />
          </Switch>
        </Router>
      </div>
    ); 
  } 
}



