import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border-radius: 4px;
  border: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  padding: 0 25px;
  width: auto;

  :hover {
    cursor: pointer;
  }

  &.variant-primary {
    background: #ff9900;
    color: #ffffff;
  }

  &.variant-secondary {
    color: #173a56;
    border: 1px solid #bcd0e5;
  }

  &.size-sm {
    height: 39px;
  }

  &.size-md {
    height: 46px;
  }

  &.size-lg {
    height: 53px;
  }
`;

function Button({ variant, size, children }) {
  return (
    <Wrapper className={`variant-${variant} size-${size}`}>{children}</Wrapper>
  );
}

export default Button;
