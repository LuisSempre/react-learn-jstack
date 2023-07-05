import React from 'react';
import Post from './Post';
import posts from '../posts';
import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 24px;
`;

export default function PostsList() {
  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Container>
  );
}