import React from 'react';
import styled from 'styled-components';
import { H2, TextSm } from './Typography';
import Card from './Card';
import cardimage1 from '../images/cardimage1.svg';
import cardimage2 from '../images/cardimage2.svg';
import cardimage3 from '../images/cardimage3.svg';
import Slider from './Slider';

const Wrapper = styled.div`
  margin-bottom: 120px;

  h2 {
    margin: 0 0 10px 0;
  }

  p {
    font-weight: normal;
  }
`;

const Container = styled.div`
  max-width: 1107px;
  margin: 0 auto;
`;

function SectionMarketingStrategies() {
  return (
    <Wrapper>
      <Container>
        <H2>Marketing strategies</H2>
        <TextSm>
          Join 40,000+ other marketers and get proven strategies on email
          marketing
        </TextSm>
        <Slider>
          <Card
            link="#"
            image={cardimage1}
            author="Abdullah"
            date="03 March 2019"
            text="Increasing Prosperity With Positive Thinking"
          ></Card>
          <Card
            link="#"
            image={cardimage2}
            author="Abdullah"
            date="03 March 2019"
            text="Motivation Is The First Step To Success"
          ></Card>
          <Card
            link="#"
            image={cardimage3}
            author="Abdullah"
            date="03 March 2019"
            text="Success Steps For Your Personal Or Business Life"
          ></Card>
          <Card
            link="#"
            image={cardimage3}
            author="Abdullah"
            date="03 March 2019"
            text="Success Steps For Your Personal Or Business Life"
          ></Card>
        </Slider>
      </Container>
    </Wrapper>
  );
}

export default SectionMarketingStrategies;
