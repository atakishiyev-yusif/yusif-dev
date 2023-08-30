import styled from 'styled-components';

export const Hero = styled.section`
  margin-top: 48px;
  display: flex;
  gap: 34px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const HeroContent = styled.div`
    width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    
  }
`;

export const Terminal = styled.div`
    width: 50%;
    max-height: 400px;
    height: 400px;
  @media (max-width: 768px) {
    width: 100%;
    max-height: 250px;
    display: none;
    
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const Description = styled.p`
  color: var(--gray);
  margin: 32px 0 24px;
`;

export const TerminalCommandButton = styled.button`
  margin-top: 12px;
  font-weight: 600;
  border-bottom: 1px solid var(--primary-color);
  &:hover{
    opacity: 0.5;
  }
  span{
    color: red;
  }
`;

export const CommandsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0;
`;





