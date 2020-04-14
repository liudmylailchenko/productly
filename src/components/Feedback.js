import React from 'react';
import styled from 'styled-components/macro';
import { TextSm } from './Typography';

const Wrapper = styled.div`
  margin: 20px 0;

  p {
    color: #2f281e;
    background: white;
    padding: 15px 25px;
    border-radius: 26px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: 650px) {
      margin: 0 50px 0 -200px;
    }
  }

  @media screen and (min-width: 650px) {
    &:nth-child(even) p {
      margin: 0 0 0 50px;
    }
  }

  @media screen and (min-width: 1050px) {
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};

    &:nth-child(even) p {
      margin: 0 50px 0 -200px;
    }

    &.reverse p {
      margin: 0 0 0 0;
    }
  }
`;

const ImgContainer = styled.div`
  display: table;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 1050px) {
    ${Wrapper}.reverse & {
      margin: 0 auto 0 0;
    }
  }
`;

const Circle = styled.div`
  width: 17px;
  height: 17px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -5px;

  /*  prettier-ignore */
  ${Wrapper}:nth-child(even) & {
    left: 80px;

    @media screen and (min-width: 1050px) {
      left: -5px;
    }
  }

  ${Wrapper}.reverse & {
    left: 80px;
  }
`;

const CircleSm = styled.div`
  width: 9px;
  height: 9px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 10px;

  /*  prettier-ignore */
  ${Wrapper}:nth-child(even) & {
    left: 75px;

    @media screen and (min-width: 1050px) {
      left: 10px;
    }
  }

  ${Wrapper}.reverse & {
    left: 75px;
  }
`;

function Feedback({ image, reverse, text, top, left, right }) {
  return (
    <Wrapper
      className={reverse ? 'reverse' : ''}
      top={top}
      left={left}
      right={right}
    >
      <TextSm>{text}</TextSm>
      <ImgContainer className="img-container">
        <img src={image} alt="" />
        <Circle></Circle>
        <CircleSm></CircleSm>
      </ImgContainer>
    </Wrapper>
  );
}

export default Feedback;
