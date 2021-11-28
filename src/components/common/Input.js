import React from 'react';
import styled, { css } from 'styled-components';

const Input = ({ name, label, required, textArea = false, ...props }) => (
  <div>
    <Label htmlFor={name}>
      {label} {required && '*'}
    </Label>
    {textArea ? (
      <StyledTextAtea id={name} name={name} {...props} required />
    ) : (
      <StyledInput id={name} name={name} {...props} required />
    )}
  </div>
);

export default Input;

const sharedStyle = css`
  border: 2px solid ${props => props.theme.color.black.regular};
  border-radius: 5px;
  line-height: 2.5rem;
  width: 100%;
`;

const StyledTextAtea = styled.textarea`
  ${sharedStyle}
  height: 10rem;
`;

const StyledInput = styled.input`
  ${sharedStyle}
`;

const Label = styled.label`
  display: block;
`;
