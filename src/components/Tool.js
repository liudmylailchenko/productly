import React from 'react';
import styled from 'styled-components/macro';
import { H4, TextSm } from './Typography';

const Wrapper = styled.div`
  padding: 0 20px;
  flex: 1 1 100%;
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
