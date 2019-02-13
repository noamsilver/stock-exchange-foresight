import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Market from '../Market';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        Foresight Stock Exchange
      </header>
      <Market />
    </div>
  </Provider>
);

export default App;
