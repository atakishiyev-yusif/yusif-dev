import styled from "styled-components";

export const PrimaryButton = styled.a`
  background: transparent;
  border: 1px solid var(--primary-color);
  padding: 8px;
  height: 3rem;
  width: 9rem;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: .5s;
  
  &:hover{
    background: var(--hover-primary);
    transition: .5s;
  }
`;
