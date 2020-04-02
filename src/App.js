import React from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
