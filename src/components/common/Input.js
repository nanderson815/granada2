import React from 'react';
import styled, { css } from 'styled-components';

const inputSwitcher = displayType => {
  switch (displayType) {
    case 'textArea':
      return StyledTextAtea;
    case 'select':
      return StyledSelect;
    default:
      return StyledInput;
  }
};

const Input = ({ name, label, required, displayType, ...props }) => {
  const Switched = inputSwitcher(displayType);
  return (
    <div>
      <Label htmlFor={name}>
        {label} {required && '*'}
      </Label>
      <Switched id={name} name={name} {...props} required />
    </div>
  );
};

export default Input;

const sharedStyle = css`
  border: 2px solid ${props => props.theme.color.black.regular};
  border-radius: 5px;
  height: 2.5rem;
  width: 100%;
  background: ${props => props.theme.color.white.regular};
`;

const StyledTextAtea = styled.textarea`
  ${sharedStyle}
  height: 10rem;
`;

const StyledInput = styled.input`
  ${sharedStyle}
`;

const StyledSelect = styled.select`
  ${sharedStyle}
`;

const Label = styled.label`
  display: block;
`;
