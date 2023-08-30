import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Media = styled.div`
  position: fixed;
  left: 17px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  z-index: 999;
  top: 0;
  
  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1100px) {
    left: 0;
  }
`;

export const Line = styled.div`
  height: 100%;
  width: 1px;
  background: var(--gray);
`;

export const MediaItem = styled.a`
  transition: 1s;
  svg {
    margin: 4px;
    transition: 1s;

    &:hover {
      transition: 1s;
      fill: var(--primary-color);
      scale: 1.4;
      margin: 8px;

    }
  }
`;