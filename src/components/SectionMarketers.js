import React from 'react';
import styled from 'styled-components/macro';
import { H2, H6, TextSm } from './Typography';
import Section from './Section';
import image from '../images/marketers.svg';
import Container from './Container';

const Wrapper = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 450px) {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 850px) {
    margin-bottom: 100px;
  }

  h6 {
    margin: 25px 0 12px 0;
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
`;

function SectionMarketers() {
  return (
    <Wrapper>
      <ContainerStyled>
        <Section image={image}>
          <TextSm>Optimisation for</TextSm>
          <H2>Marketers</H2>
          <TextSm>
            Few would argue that, despite the advancements of feminism over the
            past three decades, women still face a double standard when it comes
            to their behavior.
          </TextSm>
          <H6>Accessory makers</H6>
          <TextSm>
            While most people enjoy casino gambling, sports betting, lottery and
            bingo playing for the fun.
          </TextSm>
          <H6>Alterationists</H6>
          <TextSm>
            If you are looking for a new way to promote your business that won’t
            cost you more money.
          </TextSm>
          <H6>Custom Design designers</H6>
          <TextSm>
            If you are looking for a new way to promote your business that won’t
            cost you more money.
          </TextSm>
        </Section>
      </ContainerStyled>
    </Wrapper>
  );
}

export default SectionMarketers;
