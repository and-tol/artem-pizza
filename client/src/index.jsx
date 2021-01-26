import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PizzaProvider } from './PizzaContext';
import App from './App';
import './index.css';
import { store } from './init/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PizzaProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PizzaProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
