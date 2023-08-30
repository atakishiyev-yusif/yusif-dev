import * as S from './styles.jsx';
import {Media} from "../media/index.jsx";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {SidebarIcon} from "../../assets/icons/SidebarIcon.jsx";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        return setIsOpen(!isOpen);
    }
    return (
        <>
            <S.Header>
                <S.Logo className="logo">yusif.dev</S.Logo>
                <S.Nav>
                    <S.NavItems>
                        <S.NavItem>
                            <NavLink to="/"><span className="primary-color">#</span>home</NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <NavLink to="/projects"><span className="primary-color">#</span>projects</NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <NavLink to="/about-me"><span className="primary-color">#</span>about-me</NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <NavLink to="/contacts"><span className="primary-color">#</span>contacts</NavLink>
                        </S.NavItem>
                        {/*<S.NavItem>*/}
                        {/*    <select>*/}
                        {/*        <option>EN</option>*/}
                        {/*        <option>AZ</option>*/}
                        {/*    </select>*/}
                        {/*</S.NavItem>*/}
                    </S.NavItems>

                </S.Nav>
                <S.Sidebar isOpen={isOpen}>
                    <S.SidebarItems>
                        <NavLink onClick={toggleMenu} to="/"><span className="primary-color">#</span>home</NavLink>

                        <NavLink onClick={toggleMenu} to="/projects"><span className="primary-color">#</span>projects</NavLink>

                        <NavLink onClick={toggleMenu} to="/about-me"><span className="primary-color">#</span>about-me</NavLink>

                        <NavLink onClick={toggleMenu} to="/contacts"><span className="primary-color">#</span>contacts</NavLink>

                    </S.SidebarItems>
                </S.Sidebar>
                                <S.SidebarIcon isOpen ={isOpen} className = 'sidebar-icon' onClick={() => setIsOpen(!isOpen)}><SidebarIcon /></S.SidebarIcon>
            </S.Header>
            <Media/>
        </>

    )
}