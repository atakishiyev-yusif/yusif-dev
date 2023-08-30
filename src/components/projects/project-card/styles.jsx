import styled from "styled-components";

export const ProjectCard = styled.div`
  border: 1px solid var(--gray);
  width: 340px;
`;

export const ProjectCardImg  = styled.div`
  max-width: 100%;
  max-height: 201px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const ProjectTags = styled.div`
  color: var(--gray);
  padding:8px;
  border-bottom: 1px solid var(--gray);
  span:not(:first-child){
    padding-left: 8px;
  }
`;

export const ProjectContent = styled.div`
  padding: 16px;
`
export const Title = styled.h3`
  font-size: 24px;
  max-width: 18ch;
  `;

export const Description = styled.p`
  margin: 16px 0;
  color: var(--gray);
  max-width: 30ch;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

