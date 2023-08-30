import * as S from './styles.jsx'
import {PrimaryButton} from "../../primary-button/index.jsx";
import {useEffect} from "react";
import {GithubIcon} from "../../../assets/icons/GithubIcon.jsx";

export const ProjectCard = ({id, imgUrl, tags, title, description, github, live}) => {
    return (
        <S.ProjectCard>
            <S.ProjectCardImg>
                <img height={201} width={'100%'} src={imgUrl} alt={`${title} img`}/>
            </S.ProjectCardImg>
            <S.ProjectTags>
                {tags.map(tag => <span>{tag}</span>)}
            </S.ProjectTags>
            <S.ProjectContent>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
                <S.Actions>
                    <PrimaryButton href={live} name='Live' icon = '<~>'/>
                    <PrimaryButton href={github} icon={<GithubIcon />} name='Github'/>
                </S.Actions>

            </S.ProjectContent>
        </S.ProjectCard>
    )
}