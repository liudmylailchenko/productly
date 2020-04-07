import React from 'react';
import styled from 'styled-components/macro';
import { H2 } from './Typography';
import Tool from './Tool';
import background from '../images/background1.svg';
import arrow from '../images/arrow.svg';
import clock from '../images/clock.svg';
import icon from '../images/icon.svg';
import heart from '../images/heart.svg';
import Button from './Button';
import Container from './Container';

const Wrapper = styled.div`
  background: url(${background}) no-repeat center bottom;
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
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  @media screen and (min-width: 660px) {
    padding-bottom: 90px;
  }
`;

const Heading = styled(H2)`
  text-align: center;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px -20px 0;
  padding-bottom: 34px;

  @media screen and (min-width: 660px) {
    flex-direction: row;
    margin: 54px -20px 0;
  }
`;

function SectionDesignTools() {
  return (
    <Wrapper>
      <ContainerStyled>
        <Heading>
          We design tool to unveil
          <br /> your superpowers
        </Heading>
        <ToolsContainer>
          <Tool
            image={arrow}
            heading="First click test"
            text="While most people enjoy casino gambling."
          ></Tool>
          <Tool
            image={icon}
            heading="Design surveys"
            text="Sports betting, lottery and bingo playing for the fun."
          ></Tool>
          <Tool
            image={heart}
            heading="Preference tests"
            text="The Myspace page defines the individual."
          ></Tool>
          <Tool
            image={clock}
            heading="Five second tests"
            text="Personal choices and the overall personality of the person."
          ></Tool>
        </ToolsContainer>
        <Button variant="primary" size="lg">
          SIGN UP NOW
        </Button>
      </ContainerStyled>
    </Wrapper>
  );
}

export default SectionDesignTools;
