import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main/Main';
import Dashboard from './containers/Dashboard/Dashboard';
import ChatView from './containers/ChatView/ChatView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/parties" component={ChatView} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
