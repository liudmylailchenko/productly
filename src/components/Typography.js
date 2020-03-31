import styled from 'styled-components';

const HeadingBase = styled.span`
  font-weight: bold;
  color: #2f281e;
`;
export const H1 = styled(HeadingBase).attrs({ as: 'h1' })`
  font-size: 44px;
  line-height: 54px;
`;

export const H2 = styled(HeadingBase).attrs({ as: 'h2' })`
  font-size: 36px;
  line-height: 54px;
  margin: 0 0 22px 0;
`;

export const H3 = styled(HeadingBase).attrs({ as: 'h3' })`
  font-size: 24px;
  line-height: 34px;
  margin: 12px 0 0;
`;

export const H4 = styled(HeadingBase).attrs({ as: 'h4' })`
  font-size: 22px;
  line-height: 33px;
  font-weight: 600;
`;

export const H5 = styled(HeadingBase).attrs({ as: 'h5' })`
  font-size: 20px;
  line-height: 30px;
  margin: 0;
`;

export const H6 = styled(HeadingBase).attrs({ as: 'h6' })`
  font-size: 16px;
  line-height: 26px;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #544837;
  margin: 0;
`;

export const TextSm = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #544837;
  margin: 0;
`;
