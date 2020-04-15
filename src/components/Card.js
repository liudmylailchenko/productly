import React from 'react';
import styled from 'styled-components/macro';
import { H3, TextSm } from './Typography';

const Wrapper = styled.div`
  flex: 0 0 100%;
  padding: 0 16px;
  text-align: center;

  @media screen and (min-width: 500px) {
    flex: 0 0 50%;
  }

  @media screen and (min-width: 770px) {
    flex: 0 0 33.333%;
  }

  h3 {
    &:hover {
      color: #ff9900;
    }
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
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
