import React, { FC } from 'react';

import './App.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './containers/Main';

const App: FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
