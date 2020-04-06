import React from 'react';
import styled from 'styled-components/macro';
import { H2, H6, TextSm } from './Typography';
import Section from './Section';
import image from '../images/designprofessionals.svg';
import Container from './Container';

const Wrapper = styled.div`
  h6 {
    margin: 25px 0 12px 0;
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
`;

function SectionDesignProfessionals() {
  return (
    <Wrapper>
      <ContainerStyled>
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
      </ContainerStyled>
    </Wrapper>
  );
}

export default SectionDesignProfessionals;
