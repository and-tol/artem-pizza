import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
// Components
import App from './App';
import { ErrorBoundary } from './ErrorBoundary';

import './index.css';

import { store } from './init/store';

Sentry.init({
  dsn:
    'https://ddae50184a5c43fb883e96e9fd7e550c@o526096.ingest.sentry.io/5641236',
  release: process.env.REACT_APP_SENTRY_RELEASE,
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
