import React from 'react';
import styled from 'styled-components/macro';
import { H3, TextSm } from './Typography';

const Wrapper = styled.div`
  flex: 0 0 33.333%;
  padding: 0 16px;

  h3 {
    :hover {
      color: #ff9900;
    }
  }

  a {
    text-decoration: none;
  }
`;

function Card({ link, image, author, date, text }) {
  return (
    <Wrapper>
      <a href={link}>
        <img src={image} alt="" />
      </a>
      <TextSm>
        By <strong>{author}</strong> | {date}
      </TextSm>
      <a href={link}>
        <H3>{text}</H3>
      </a>
    </Wrapper>
  );
}

export default Card;
