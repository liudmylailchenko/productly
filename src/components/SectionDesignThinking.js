import React from 'react';
import styled from 'styled-components';
import { H1, Text } from './Typography';
import Button from './Button';
import image from '../images/designthinking.svg';
import Section from './Section';
import triangle from '../images/triangle.svg';

const Wrapper = styled.div`
  margin-bottom: 110px;
`;

const Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
`;

const SectionText = styled(Text)`
  margin: 45px 0;
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
  margin-left: 30px;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
`;

function DesignThinking() {
  return (
    <Wrapper>
      <Container>
        <Section image={image}>
          <H1>The Design Thinking superpowers</H1>
          <SectionText>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </SectionText>
          <Button variant="primary" size="lg">
            Get started
          </Button>
          <ButtonVideo>
            <img src={triangle} alt="" />
            Watch the Video
          </ButtonVideo>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default DesignThinking;
