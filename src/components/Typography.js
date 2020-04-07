import styled from 'styled-components/macro';

const HeadingBase = styled.span`
  font-weight: bold;
  color: #2f281e;
`;
export const H1 = styled(HeadingBase).attrs({ as: 'h1' })`
  font-size: 2.75rem;
  line-height: 3.375rem;
`;

export const H2 = styled(HeadingBase).attrs({ as: 'h2' })`
  font-size: 2.25rem;
  line-height: 3.375rem;
  margin: 0 0 22px 0;
`;

export const H3 = styled(HeadingBase).attrs({ as: 'h3' })`
  font-size: 1.5rem;
  line-height: 2.125rem;
  margin: 12px 0 0;
`;

export const H4 = styled(HeadingBase).attrs({ as: 'h4' })`
  font-size: 1.375rem;
  line-height: 2.063rem;
  font-weight: 600;
  margin: 0;
`;

export const H5 = styled(HeadingBase).attrs({ as: 'h5' })`
  font-size: 1.25rem;
  line-height: 1.875rem;
  margin: 0;
`;

export const H6 = styled(HeadingBase).attrs({ as: 'h6' })`
  font-size: 1rem;
  line-height: 1.625rem;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #544837;
  margin: 0;
`;

export const TextSm = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.625rem;
  color: #544837;
  margin: 0;
`;
