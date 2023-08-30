import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--gray);
  margin-top: 145px;
  padding: 34px 0;
`;

export const About = styled.div`
`;

export const Logo = styled.div`
  font-family: 'Caveat', cursive;
  font-size: 38px;
`;

export const Description = styled.p`
  margin-top: 16px;
`;

export const Media = styled.div`
  h3{
    font-size: 24px;
  }
`;

export const MediaItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
`;
