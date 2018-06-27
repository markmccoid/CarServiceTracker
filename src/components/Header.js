import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { StandardButton } from './common/Buttons';
import styled, { css } from 'react-emotion';

const header = css`
  background: #364051;
  border-bottom: 1px solid #333;
  padding: 0 5rem;
`;

const ContentContainer = styled.div`
  max-width: 80rem;
  padding: 0 1.2rem;
  margin: 0 auto;
  background: linear-gradient(to bottom, #1e5799 0%,#7db9e8 100%);
}`;

const header__title = css`
  color: white;
  text-decoration: none;
  h1 {
    margin: 1rem;
  }
`;

const header__content = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;


const Header = props => (
  
    <ContentContainer>
      <div className={header__content}>
        <Link className={header__title} to="/dashboard">
          <h1>Auto Service Tracker</h1>
        </Link>

        <StandardButton onClick={props.startLogout}>Logout</StandardButton>
      </div>
    </ContentContainer>
  
);

export default connect(undefined, { startLogout })(Header);
