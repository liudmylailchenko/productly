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

const Wrapper = styled.div`
  background: url(${background}) no-repeat center bottom;
  margin-bottom: 110px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1130px;
  margin: 0 auto;
  padding-bottom: 90px;
`;

const NewH2 = styled(H2)`
  text-align: center;
`;

const ToolsContainer = styled.div`
  display: flex;
  margin: 54px -20px 0 -20px;
  padding-bottom: 34px;
`;

function SectionDesignTools() {
  return (
    <Wrapper>
      <Container>
        <NewH2>
          We design tool to unveil
          <br /> your superpowers
        </NewH2>
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
      </Container>
    </Wrapper>
  );
}

export default SectionDesignTools;
