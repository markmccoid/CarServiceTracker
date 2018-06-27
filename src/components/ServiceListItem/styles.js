import React from 'react';
import styled, { css } from 'react-emotion';

export const listItemContainer = css`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  transition: background .3s ease;
  margin: 0 0 1rem 0;
  &:hover {
    background: #d7d7d7;
    color: #222;
  }
`;

export const ListTop = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  box-shadow: 0 3px 3px -3px gray;
  font-size: 1.3rem;
  padding: 10px;
`;

export const ListBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 1.1rem;
`;

export const rowCell = css`
  flex: 1
`;

export const rowCell3 = css`
  flex: 3
`;

export const DateStyle = styled('span')`
  font-size: 1.1rem;
  font-style: italic;
`;