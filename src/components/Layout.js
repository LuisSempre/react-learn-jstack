import React from 'react';
import Header from './Header';
import PostsList from './PostsList';
import Footer from './Footer';

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
      <PostsList />
      <Footer onToggleTheme={onToggleTheme}
				selectedTheme={selectedTheme}		
			/>
    </ Container>
  );
}
