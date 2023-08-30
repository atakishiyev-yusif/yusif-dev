import * as S from './styles.jsx';
import {ProjectCards} from './styles.jsx';
import {ProjectCard} from "./project-card/index.jsx";
import {SectionHeader} from "../section-header/index.jsx";
import projects from '../../data/projects.json';


export const Projects = ({splice, noTitle}) => {
    const list = { hidden: { opacity: 0 } }
    const itemAnimate = { hidden: { x: -10, opacity: 0 } }
    return (
        <S.Projects animate="hidden" variants={list} id = 'projects'>
            {noTitle ? ''
                :
                <SectionHeader name='projects' viewAll={true}/>

            }
            <ProjectCards className = 'project-cards'>
                {projects.map(item => <ProjectCard variants={itemAnimate} key={item.id} id={item.id} title={item.title}
                                                   description={item.description} imgUrl={item.imgUrl} tags={item.tags}
                                                   github={item.github} live={item.live}/>)}

            </ProjectCards>
        </S.Projects>
    )
}

