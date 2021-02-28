import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import OneBeer from './components/OneBeer';
import Random from './components/Random';
import Add from './components/Add';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/beers" component={AllBeers} exact />
        <Route path="/beers/:id" component={OneBeer} exact />
        <Route path="/random-beer" component={Random} exact />
        <Route path="/add-beer" component={Add} exact />
      </Switch>
    </div>
  );
}

export default App;
