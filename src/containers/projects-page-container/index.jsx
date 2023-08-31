import * as S from './styles'
import {Projects} from "../../components/projects/index.jsx";
import {SectionHeader} from "../../components/section-header/index.jsx";
import {motion} from 'framer-motion'
import {useEffect} from "react";

export const ProjectsPageContainer = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    },[])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
        <S.ProjectsPageContainer>
            <SectionHeader name = 'projects' noLine customIcon = '/'/>
            <S.Description>List of my projects</S.Description>
           <Projects noTitle />
        </S.ProjectsPageContainer>

        </motion.div>
    )
}