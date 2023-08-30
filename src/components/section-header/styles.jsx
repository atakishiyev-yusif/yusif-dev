import styled from 'styled-components';

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 32px;
`;
export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  gap: 16px;
`
export const Line = styled.div`
  width: 60%;
  height: 1px;
  background: var(--primary-color);
  @media (max-width: 768px) {

    display: none;
    
  }


`;