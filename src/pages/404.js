import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    display: flex;
  }

  & a {
    display: contents;
    color: red;
  }

  & h5 {
    border-right: 1px solid black;
    padding-right: 19px;
    margin-right: 19px;
  }
`;

export default () => (
  <Container>
    <div>
      <h5>404</h5>
      You're lost, go <Link to="/">home</Link>.
    </div>
  </Container>
);
