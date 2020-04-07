import React from 'react';
import styled from 'styled-components/macro';
import { H4, TextSm } from './Typography';

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;

  h4 {
    margin: 10px 0;
  }

  @media screen and (min-width: 660px) {
    padding: 0 20px;
    flex: 1 1 100%;

    h4 {
      margin: 22px 0;
    }
  }
`;

const Content = styled.div``;

function Tool({ image, heading, text }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <Content>
        <H4>{heading}</H4>
        <TextSm>{text}</TextSm>
      </Content>
    </Wrapper>
  );
}

export default Tool;
