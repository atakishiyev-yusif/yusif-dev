import * as S from './styles.jsx';
import {SectionHeader} from "../section-header/index.jsx";
import {PrimaryButton} from "../primary-button/index.jsx";
import {Link} from "react-router-dom";

export const AboutMe = () => {
    return (
        <S.AboutMe id = 'about-me'>
            <SectionHeader name='about-me'/>
            <S.Description>Hello, i’m Yusif!</S.Description>
            <S.Description>
                I’m a self-taught front-end developer . I can develop responsive websites from scratch and raise them
                into modern user-friendly web experiences.
            </S.Description>
            <S.Description>
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I always
                strive to learn about the newest technologies and frameworks.
            </S.Description>
            <Link to='/about-me'>
                <PrimaryButton name='Read more ->'/>
            </Link>
        </S.AboutMe>
    )
}

