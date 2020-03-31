import React from 'react';
import styled from 'styled-components';
import { H2, TextSm } from './Typography';
import background from '../images/background2.svg';
import bg from '../images/avator.svg';
import Button from './Button';

const Wrapper = styled.div`
  background: url(${background}) no-repeat center top / cover;
  margin-bottom: 30px;

  p {
    color: #567592;
    margin-bottom: 45px;
  }
`;

const Container = styled.div`
  background: url(${bg}) no-repeat center center;
  min-height: 835px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding-bottom: 149px;
  text-align: center;
`;

function SectionSuperHero() {
  return (
    <Wrapper>
      <Container>
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
      </Container>
    </Wrapper>
  );
}

export default SectionSuperHero;
