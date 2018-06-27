import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';


import { startLogin, startEmailRegistration } from '../actions/auth';
import LoginWithEmail from './LoginWithEmail';
import { GoogleLoginButton, FacebookLoginButton } from './common/Buttons';

const Container = styled.div`
  background: linear-gradient(to bottom, #1e5799 0%,#7db9e8 100%);
  background-size: cover;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const Box = styled.div`
  background: white;
  border-radius: 3px;
  border: 1px solid #969696;
  text-align: center;
  width: 25rem;
  padding: 10px 5px;
`;
const EmailContainer = styled('div')`
  background: white;
  margin: 10px;
  padding: 10px;
  border: 1px solid #1797cc;
  box-shadow: 0 0 3px #1797cc
`;
const titleFormat = css`
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  font-size: 1.3rem;
  background-color: #B7D1E5;
  margin: -10px -10px 10px -10px;
  padding: 10px;
  border-bottom: 1px solid black;
  text-align: center;
`;
const Login = (props) => {
  return (
    <Container>
      <Box>
        <h1 className="layout__title">Auto Service Tracker</h1>
        <EmailContainer>
          <div className={titleFormat}>Login With Email</div>
          <LoginWithEmail onEmailLogin={(email, password) => props.startLogin(email, password) }
            onRegister={(email, password) => props.startEmailRegistration(email, password)}
          />
        </EmailContainer>
        <div>          
          <GoogleLoginButton onClick={() => console.log('implement google login')} />
        </div>
      </Box>
    </Container>
  );
};

export default connect(undefined, {
  startLogin,
  startEmailRegistration
})(Login);
