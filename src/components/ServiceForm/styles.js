import React from 'react';
import styled, { css, cx } from 'react-emotion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 75%;
  justify-content: center;
  margin: 25px auto;
`;

export const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  &>* {
    padding; 0 5px;
    margin: 0 7px;
    font-size: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e2e2e2;
  border-bottom: 1px solid #808080;
  font-size: 2rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  margin: 0 7px;
`;