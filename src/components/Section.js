import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  margin: 0 -40px;
`;

const Content = styled.div`
  width: 50%;
  padding: 0 40px;
`;

const Picture = styled.div`
  width: 50%;
  padding: 0 40px;
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
