import React from 'react';
import styled, { css } from 'react-emotion';

const Loader = styled('div')`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`
const LoaderImage = styled('img')`
  width: 6rem;
  height: 6rem;
`
const LoadingPage = () => {
  return (
    <Loader>
      <LoaderImage src='./images/loader.gif' />
    </Loader>
  );
};

export default LoadingPage;
