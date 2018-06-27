import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Input } from 'antd';

const formGroup = css`
  position: relative;
  padding-top: 1rem;
`;
const labelStuff = css`
    position: absolute;
    top: 0;
    left: 0;
    font-family: Arial;
    font-size: 1.2rem;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.2s ease-out;
    input:placeholder-shown + & {
      opacity: 0;
    transform: translateY(1rem);
    }
`;
const inputStyle = css`    
  box-sizing: border-box;
  border:1px solid #BEBEBE;
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  font-size: 1.2rem;
  transition: all 0.30s ease-in-out;
  outline: none;  
  &:focus {
    box-shadow: 0 0 8px #88D5E9;
    border: 1px solid #88D5E9;
  }
`;

const MyInputLabelOutside = (props) => {
  const { label, ...rest } = props;
  return (
    <div className={formGroup}>
      <input className ={inputStyle} {...rest} />
      <label className={labelStuff} >{label}</label>
    </div>
  )
}

const InputGroup = styled.div`
  display: inline-block;
  padding: 3px;
  border: 1px solid cornflowerblue;
  border-radius: 4px;
`;
const inputCSS = css`
  outline: none;
  border: none;
  display:block;
  padding: 0 10px;
  line-height: 1.2em;
  font-size: 1.2rem;
`;
const labelCSS = css`
  display: block;
  font-size: .8rem;
  color: cornflowerblue;
`;

const MyInput  = (props) => {
  const { label, ...rest } = props;
  return (
    <InputGroup>
      <label for={rest.id} className={labelCSS} >{label}</label>
      <Input name={rest.id} className ={inputCSS} {...rest} />
    </InputGroup>
  )
}


export default MyInput;

MyInput.propTypes = {
  /* Label for input */
  label: PropTypes.string.isRequired,
  /* Id for input */
  id: PropTypes.string.isRequired
}