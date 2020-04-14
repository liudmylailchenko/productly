import React from 'react';
import styled from 'styled-components/macro';
import { H2, TextSm } from './Typography';
import background from '../images/background2.svg';

import Button from './Button';
import Container from './Container';
import Feedback from './Feedback';
import pitch from '../images/pitch.png';
import design from '../images/design.png';
import app from '../images/app.png';
import marketing from '../images/marketing.png';
import users from '../images/users.png';

const Wrapper = styled.div`
  background: url(${background}) no-repeat center top / cover;
  padding-top: 70px;
  margin-bottom: 30px;

  @media screen and (min-width: 1050px) {
    padding-top: 0;
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 680px;
  flex-direction: column;
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1050px) {
    margin: 0;
  }

  p {
    color: #567592;
    margin-bottom: 45px;
  }
`;

function SectionSuperHero() {
  return (
    <Wrapper>
      <ContainerStyled>
        <Content>
          <H2>Need a super hero?</H2>
          <TextSm>
            Do you require some help for your project: Conception workshop,
            <br />
            prototyping, marketing strategy, landing page, Ux/UI?
          </TextSm>
          <Button variant="primary" size="lg">
            Contact our expert
          </Button>
        </Content>

        <Feedback
          image={pitch}
          text="I can take care of your pitch"
          reverse
          top="150px"
          left="10px"
        ></Feedback>
        <Feedback
          image={design}
          text="I can design you website"
          top="460px"
          left="250px"
        ></Feedback>
        <Feedback
          image={users}
          text="I will define the profile of your users"
          top="560px"
          right="300px"
        ></Feedback>
        <Feedback
          image={app}
          text="I can prototype your app"
          top="440px"
          right="10px"
        ></Feedback>
        <Feedback
          image={marketing}
          text="I can help marketing strategy"
          top="110px"
          right="50px"
        ></Feedback>
      </ContainerStyled>
    </Wrapper>
  );
}

export default SectionSuperHero;
