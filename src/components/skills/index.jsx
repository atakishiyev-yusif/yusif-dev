import * as S from './styles.jsx';
import {SectionHeader} from "../section-header/index.jsx";
import {SkillsCard} from "./skills-card/index.jsx";
import skills from '../../data/skills.json';

export const Skills = ({customIcon, noLine}) => {
  return (
    <S.Skills>
        <SectionHeader name = 'skills' customIcon={customIcon} noLine={noLine}/>
        <S.SkillsImg>
            <img src="" alt=""/>
        </S.SkillsImg>
        <S.SkillsCards >
            {skills.map(skill => <SkillsCard title={skill.title} skillItems = {skill.skillItems} />)}
        </S.SkillsCards>
    </S.Skills>
  )
}

