import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global.js';
import Layout from './components/Layout';
import themes from './themes/index.js'

function App() {
	const [ theme, setTheme ] = useState('dark')
	
	const firstRender = useRef(true);
	console.debug(firstRender.current)

	const currentTheme = useMemo(() => {
		return themes[theme] || themes.dark;
	}, [theme]);

	function handleToggleTheme() {
		setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
	}

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		console.debug({theme})
	}, [theme])
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout 
				onToggleTheme={handleToggleTheme} 
				selectedTheme={theme}
			/>
    </ThemeProvider>
  );
};

export default App;
