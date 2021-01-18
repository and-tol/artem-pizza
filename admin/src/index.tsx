import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// import CssBaseLine from '@material-ui/core/CssBaseLine';
import Container from '@material-ui/core/Container';

import './index.css';
import App from './App';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <>
          {/* <CssBaseLine /> */}
          <Container maxWidth='md'>
            <App />
          </Container>
        </>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
