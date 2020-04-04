import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main/Main';
import Dashboard from './containers/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
