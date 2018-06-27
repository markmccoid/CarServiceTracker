import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, injectGlobal } from 'react-emotion';
import MyInput from './common/MyInput';
import { StandardButton } from './common/Buttons';

const Fragment = React.Fragment;

const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: left;
`;

class LoginWithEmail extends React.Component {
  static propTypes = {
    onEmailLogin: PropTypes.func
  }

  state = {
    emailInput: '',
    passwordInput: '',
    confirmPassword: '',
    registering: false
  }
  onEmailChange = (e) => {
    const emailInput = e.target.value;
    this.setState({ emailInput });
  }
  onPasswordChange = (e) => {
    const passwordInput = e.target.value;
    this.setState({ passwordInput });
  }
  onConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    this.setState({ confirmPassword });
  }
  onRegistering = () => {
    if (this.state.passwordInput === this.state.confirmPassword) {
      this.props.onRegister(this.state.emailInput, this.state.passwordInput)
    } else {
      alert('Password must match');
      this.setState({ passwordInput: '', confirmPassword: ''});
      
    }

  }
  render() {
    return (
      <EmailInputContainer>
        <MyInput 
          id="email"
          type="text" 
          name="email" 
          placeholder="Email"
          label="Email"
          value={this.state.emailInput}
          onChange={this.onEmailChange}
        />
        <MyInput 
          id="password"
          type="password" 
          name="password" 
          placeholder="Password"
          label="Password"
          value={this.state.passwordInput}
          onChange={this.onPasswordChange}
        />
        {this.state.registering ? 
          <MyInput 
            id="confirmpassword"
            type="password" 
            name="confirmpassword" 
            placeholder="Confirm Password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.onConfirmPasswordChange}
          /> : null
        }
        {this.state.registering ?
          <StandardButton 
            onClick={this.onRegistering}
            style={{textAlign: "center"}}
          >
            Register
          </StandardButton> 
        :
          <StandardButton 
            onClick={() => this.props.onEmailLogin(this.state.emailInput, this.state.passwordInput)}
            style={{textAlign: "center"}}
          >
            Login With Email
          </StandardButton> 
        }

          <div style={{ width: "100%", textAlign: "center"}}>
            <hr />
            <a onClick={() => this.setState((oldState) => ({ registering: !oldState.registering}))}>
              {this.state.registering ? 'Cancel' : 'Register with Email'}
            </a>
          </div>
      </EmailInputContainer>
  
    );
  }
}

export default LoginWithEmail;