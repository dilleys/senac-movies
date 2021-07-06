import './App.css';
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
//import Movies from './Pages/Movies';
import SingleMovie from './Pages/SingleMovie';
import PersistentDrawerLeft from './PersistentDrawerLeft';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/single">
        <SingleMovie/>
        </Route>
        <Route path="/">
        <PersistentDrawerLeft/>
        </Route>
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
