import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 620px) {
    width: 100%;
    height: 100vh;
    padding-left: 160px;
  }

  @media screen and (max-width: 619px) {
    height: calc(100vh - 56px);
  }
`;

export default () => (
  <Container>
    <div>This is STA 2023</div>
  </Container>
);
