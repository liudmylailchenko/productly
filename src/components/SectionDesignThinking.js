import React from 'react';
import styled from 'styled-components/macro';
import { H1, Text } from './Typography';
import Button from './Button';
import image from '../images/designthinking.svg';
import Section from './Section';
import triangle from '../images/triangle.svg';
import Container from './Container';

const Wrapper = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 450px) {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 850px) {
    margin-bottom: 100px;
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
`;

const SectionText = styled(Text)`
  margin: 45px 0;
`;

const ButtonsContainer = styled.div`
  text-align: center;
`;

const ButtonVideo = styled.button`
  background: none;
  border: none;
  outline: none;
  width: auto;
  height: 53px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #ff9900;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin: 10px 30px;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
`;

function DesignThinking() {
  return (
    <Wrapper>
      <ContainerStyled>
        <Section image={image}>
          <H1>The Design Thinking superpowers</H1>
          <SectionText>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </SectionText>
          <ButtonsContainer>
            <Button variant="primary" size="lg">
              Get started
            </Button>
            <ButtonVideo>
              <img src={triangle} alt="" />
              Watch the Video
            </ButtonVideo>
          </ButtonsContainer>
        </Section>
      </ContainerStyled>
    </Wrapper>
  );
}

export default DesignThinking;
