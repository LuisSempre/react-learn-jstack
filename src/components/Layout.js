import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Routes from '../Routes';

import styled from 'styled-components';

export const Container = styled.header`
  background: ${({theme}) => theme.headerBackgroundColor};
  }
`;

export default function Layout({ onToggleTheme,
selectedTheme }) {
  return (
    <Container>
      <Header onToggleTheme={onToggleTheme}
				selectedTheme={selectedTheme}/>
     <Routes />
		<Footer onToggleTheme={onToggleTheme}
				selectedTheme={selectedTheme}		
			/>
    </ Container>
  );
}
