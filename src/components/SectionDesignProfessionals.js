import React from 'react';
import styled from 'styled-components';
import { H2, H6, TextSm } from './Typography';
import Section from './Section';
import image from '../images/designprofessionals.svg';

const Wrapper = styled.div`
  margin-bottom: 100px;

  h6 {
    margin: 25px 0 12px 0;
  }
`;

const Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
`;

function SectionDesignProfessionals() {
  return (
    <Wrapper>
      <Container>
        <Section image={image}>
          <TextSm>Effortless Validation for</TextSm>
          <H2>Design Professionals</H2>
          <TextSm>
            The Myspace page defines the individual, his or her characteristics,
            traits, personal choices and the overall personality of the person.
          </TextSm>
          <H6>Accessory makers</H6>
          <TextSm>
            While most people enjoy casino gambling, sports betting, lottery and
            bingo playing for the fun.
          </TextSm>
          <H6>Alterationists</H6>
          <TextSm>
            If you are looking for a new way to promote your business that won’t
            cost you more money.{' '}
          </TextSm>
          <H6>Custom Design designers</H6>
          <TextSm>
            If you are looking for a new way to promote your business that won’t
            cost you more money,{' '}
          </TextSm>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default SectionDesignProfessionals;
