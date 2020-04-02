import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 -20px;

  @media screen and (min-width: 660px) {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: 660px) {
    width: 50%;
  }
`;

const Picture = styled.div`
  width: 60%;
  padding: 20px;

  img {
    max-width: 100%;
  }
  @media screen and (min-width: 660px) {
    width: 50%;
    padding: 0 20px;
  }
`;

function Section({ image, children, reverse }) {
  return (
    <Wrapper reverse={reverse}>
      <Content>{children}</Content>
      <Picture>
        <img src={image} alt="" />
      </Picture>
    </Wrapper>
  );
}
export default Section;
