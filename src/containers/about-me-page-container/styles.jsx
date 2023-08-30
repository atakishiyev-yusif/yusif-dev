import styled from 'styled-components';

export const AboutMePageContainer = styled.div`
  scroll-margin: 120px;
`;

export const Title = styled.div`
  margin-bottom: 112px;
  margin-top: 48px;

  h2 {
    font-size: 32px;
    margin-bottom: 14px;
  }
`;

export const Description = styled.p`
  color: var(--gray);
  margin-top: 24px;
  width: 58ch;
  @media (max-width: 768px) {
  width: unset;
  
`;

export const MyFunFacts = styled.div`
  margin-top: 112px;
`;

export const Items = styled.div`display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 34px;
  span{
    padding: 8px;
    border: 1px solid var(--gray);
    color: var(--gray);
  }`;