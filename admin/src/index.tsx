import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, ThemeProvider, createMuiTheme, styled } from '@material-ui/core/';

import './index.css';
import App from './App';

const client = new QueryClient();
const theme = createMuiTheme({
  typography: {
    fontFamily: ['-apple-system', 'Roboto Slab', 'serif'].join(','),
    fontSize: 12,
    h3: { fontSize: '1.8rem', marginBottom: '1.8rem' },
    button: { fontSize: '0.8rem' },
  },
});

const StyledContainer = styled(Container)({
  paddingTop: '1rem',
  paddingBottom: '1.5rem'
})


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            {/* <CssBaseLine /> */}
            <StyledContainer maxWidth='md'>
              <App />
            </StyledContainer>
          </>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
