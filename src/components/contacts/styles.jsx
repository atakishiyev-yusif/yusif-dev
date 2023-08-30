import styled from 'styled-components';

export const Contacts = styled.section`
  margin-top: 145px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 36px;
  }


`;

export const MessageHere = styled.div`
  border: 1px solid var(--gray);
  padding: 16px;

`;

export const Title= styled.h4`
  margin-bottom: 16px;
  font-weight: 600;
`;

export const Description = styled.div`
  color: var(--gray);
  max-width: 52ch;
`;

export const MessageApp = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  &:not(:first-child){
    margin-top: 8px;
  }
  &:hover span{
    color: var(--white);
  }
`;

export const AppIcon = styled.div``;

export const AppName = styled.span`
  color: var(--gray);
`;

