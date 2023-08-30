import styled from 'styled-components';

export const Header = styled.header`
  padding: 22px 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 1s;
  z-index: 999;
  position: fixed;
  top: 0;
  width: 1100px;
  backdrop-filter: blur(10px);

  @media (max-width: 1224px) {
    width: 90%;
  }
`;

export const Logo = styled.div`
  font-family: 'Caveat', monospace;
  font-size: 38px;
`;

export const Nav = styled.nav`
  select {
    padding: 8px;
    background: transparent;
    color: var(--gray);
    border: 1px solid transparent;

    &:focus {
      border: 1px solid var(--gray);
      border-radius: 5px;
      opacity: 0.5;
      color: var(--white);
    }

    option {
      background: var(--background);
      color: var(--white);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: auto;
  height: 100vh;
  width: 50%;
  background: var(--background);
  border-left: 1px solid var(--gray);
  padding: 22px;
  font-size: 22px;
    transition: 1s;
  @media (max-width: 768px) {
    transition: 1s;
    display: ${props => props.isOpen ? 'block' : 'none'};
    
`;

export const SidebarIcon = styled.button`
  position: absolute;
  right: 1rem;
  align-items: center;
  display: ${props => props.isOpen ? 'none' : 'flex'};
  

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--gray);
  a:nth-child(2){
    margin-top: 48px;
  }
  .active{
    color: var(--white);
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  

  @media (max-width: 1040px) {
    gap: 18px;
  }
`;
export const NavItem = styled.li`
  color: var(--gray);
  font-weight: 500;

`;

export const CloseIcon = styled.a`
  position: absolute;
  right: 0;
  
  svg:hover{
  path:first-child{
      fill: red;
  }
    
  }
`;