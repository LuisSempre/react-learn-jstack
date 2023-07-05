import React from 'react';
import styled from 'styled-components';

export const Container = styled.footer`
  background: #111;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;
  margin-top: 24px;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;


export default function Footer() {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button">🌞</button>
    </Container>
  );
}