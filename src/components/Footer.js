import React from 'react';
import styled from 'styled-components/macro';
import { H5, TextSm } from './Typography';
import logo from '../images/Logo.svg';
import Button from './Button';
import Container from './Container';

const Wrapper = styled.div`
  h5 {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;
    @media screen and (min-width: 850px) {
      margin-bottom: 30px;
    }
  }

  p {
    font-weight: normal;
    line-height: 35px;
  }

  img {
    margin: 0 40px 30px 10px;
  }
`;

const ContainerStyled = styled(Container)`
  padding: 50px 20px 55px;
  border-top: 1px solid rgba(188, 208, 229, 0.496913);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and (min-width: 900px) {
    padding: 90px 20px 95px;
  }
`;

const Content = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  width: 100%;

  @media screen and (min-width: 640px) {
    width: auto;
  }
`;

const Links = styled.div`
  margin: 0 0 20px;
  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = styled.div`
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
      <ContainerStyled>
        <img src={logo} alt="" />
        <Content>
          <LinksContainer>
            <Links>
              <H5>Quick Links</H5>
              <a href="/">
                <TextSm>About us</TextSm>
              </a>
              <a href="/">
                <TextSm>Blog</TextSm>
              </a>
              <a href="/">
                <TextSm>Contact</TextSm>
              </a>
              <a href="/">
                <TextSm>FAQ</TextSm>
              </a>
            </Links>

            <Links>
              <H5>Legal Stuff</H5>
              <a href="/">
                <TextSm>Disclaimer</TextSm>
              </a>
              <a href="/">
                <TextSm>Finansing</TextSm>
              </a>
              <a href="/">
                <TextSm>Privacy Policy</TextSm>
              </a>
              <a href="/">
                <TextSm>Terms of Service</TextSm>
              </a>
            </Links>
          </LinksContainer>
          <SignUp>
            <H5>Knowing you're always on the best energy deal. </H5>
            <input placeholder="Enter your phone Number"></input>
            <Button variant="primary" size="sm">
              Sign up Now
            </Button>
          </SignUp>
        </Content>
      </ContainerStyled>
    </Wrapper>
  );
}

export default Footer;
