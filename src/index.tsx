import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import {store} from './redux/store'
import { Provider } from 'react-redux'
import App from './App';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme/theme'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

