import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global.js';
import Layout from './components/Layout';
import themes from './themes/index.js'

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
