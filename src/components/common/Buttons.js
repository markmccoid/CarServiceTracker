import React from 'react';
import { css, cx } from 'react-emotion';

/** Google Login Button */
const loginBtn = css`
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #fff;

  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
`;
/*----------------------------------
Google Login Button
------------------------------------*/
const loginBtnGoogle = css`
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #dd4b39;

  &:before {
    border-right: #bb3f30 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
      6px 6px no-repeat;
  }

  &:hover,
  &:focus {
    background: #e74b37;
  }
`;

export const GoogleLoginButton = (props) => {
  return (
    <button className={cx(loginBtn, loginBtnGoogle)}
      {...props}
    >
      Login with Google
    </button>
  );
};

/*----------------------------------
Facebook Login Button
------------------------------------*/
const loginBtnFacebook = css`
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;

  &:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
  }

  &:hover,
  &:focus {
    background-color: #5B7BD5;
    background-image: linear-gradient(#5B7BD5, #4864B1);
  }
`;

export const FacebookLoginButton = (props) => {
  return (
    <button className={cx(loginBtn, loginBtnFacebook)}
      {...props}
    >
      Login with Facebook
    </button>
  );
};

export const StandardButton = ({color, ...props}) => {
  /**Standard Button */
  const standardLoginBtn = css`
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 15px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #fff;
    background: ${color ? color : '#00b4f0'};

  &:focus {
    outline: none;
    box-shadow: 0 0 8px #88D5E9;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
  `;
  return (
    <button className={`${standardLoginBtn}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export const linkButtoncss = css`
  padding: 1rem;
  background: #1797cc;
  display: inline-block;
  text-decoration: none;
  line-height: 1;
  color: white;
  border: 1px solid darken(#1797cc, 5%);
  margin: 1rem;
  padding: .5rem;
`;

export const LinkButton = (props) => {

  return (
    <button className={`${linkButtoncss}`}
      {...props}
    >
      {props.children}
    </button>
  );
}