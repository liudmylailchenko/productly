import React from 'react';
import styled from 'styled-components/macro';
import { H2, TextSm } from './Typography';
import Section from './Section';
import image from '../images/productmanagers.svg';
import check from '../images/check.svg';
import Container from './Container';

const Wrapper = styled.div``;

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
`;

const CheckItem = styled.div`
  display: flex;
  margin: 30px 0 0;

  img {
    margin-right: 30px;
  }
`;

function SectionProductManagers() {
  return (
    <Wrapper>
      <ContainerStyled>
        <Section reverse image={image}>
          <TextSm>Easier decision making for</TextSm>
          <H2>Product Managers</H2>
          <TextSm>
            The Myspace page defines the individual, his or her characteristics,
            traits, personal choices and the overall personality of the person.
          </TextSm>
          <CheckItem>
            <img src={check} alt="" />
            <TextSm>Never worry about overpaying for your energy again.</TextSm>
          </CheckItem>
          <CheckItem>
            <img src={check} alt="" />
            <TextSm>
              We will only switch you to energy companies that we trust and will
              treat you right.
            </TextSm>
          </CheckItem>
          <CheckItem>
            <img src={check} alt="" />
            <TextSm>
              We track the markets daily and know where the savings are.
            </TextSm>
          </CheckItem>
        </Section>
      </ContainerStyled>
    </Wrapper>
  );
}

export default SectionProductManagers;
