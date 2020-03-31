import React from 'react';
import styled from 'styled-components';
import logo from '../images/Logo.svg';
import Button from './Button';

const Wrapper = styled.header`
  padding: 25px 0;
`;

const Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const LogoWraper = styled.div`
  flex-grow: 1;
`;

const ButtonsWrapper = styled.div`
  button {
    margin-left: 14px;
  }
`;

const Navigation = styled.button`
  font-size: 14px;
  line-height: 28px;
  width: auto;
  height: auto;
  background: none;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Container>
        <LogoWraper>
          <img src={logo} alt="" />
        </LogoWraper>

        <Navigation>Product</Navigation>
        <Navigation>Customers</Navigation>
        <Navigation>Pricng</Navigation>
        <Navigation>Resources</Navigation>

        <ButtonsWrapper>
          <Button variant="secondary" size="md">
            Sign in
          </Button>
          <Button variant="primary" size="md">
            Sign up
          </Button>
        </ButtonsWrapper>
      </Container>
    </Wrapper>
  );
}

export default Header;
