import React from 'react';
import styled from 'styled-components/macro';
import { H5, TextSm } from './Typography';
import logo from '../images/Logo.svg';
import Button from './Button';

const Wrapper = styled.div`
  h5 {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 35px;
  }

  p {
    font-weight: normal;
    line-height: 35px;
  }
`;

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 102px 0 95px;
  border-top: 1px solid rgba(188, 208, 229, 0.496913);
  display: flex;
  align-items: flex-start;
`;

const Links = styled.div`
  margin-left: 127px;
`;

const SignUp = styled.div`
  margin-left: 82px;
  max-width: 325px;

  input {
    border: 1px solid #bcd0e5;
    border-radius: 4px;
    width: 100%;
    height: 48px;
    outline: none;
    padding: 0 15px;
    margin: 4px 0 21px;

    &::placeholder {
      color: #bcd0e5;
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="" />
        <Links>
          <H5>Quick Links</H5>
          <TextSm>About us</TextSm>
          <TextSm>Blog</TextSm>
          <TextSm>Contact</TextSm>
          <TextSm>FAQ</TextSm>
        </Links>
        <Links>
          <H5>Legal Stuff</H5>
          <TextSm>Disclaimer</TextSm>
          <TextSm>Finansing</TextSm>
          <TextSm>Privacy Policy</TextSm>
          <TextSm>Terms of Service</TextSm>
        </Links>
        <SignUp>
          <H5>Knowing you're always on the best energy deal. </H5>
          <input placeholder="Enter your phone Number"></input>
          <Button variant="primary" size="sm">
            Sign up Now
          </Button>
        </SignUp>
      </Container>
    </Wrapper>
  );
}

export default Footer;
