import * as S from './styles.jsx';
import {Skills} from "../../components/skills/index.jsx";
import {motion} from 'framer-motion';
import {SectionHeader} from "../../components/section-header/index.jsx";
import {useEffect, useState} from "react";


export const AboutMePageContainer = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    },[])
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
            >
                <S.AboutMePageContainer>
                    <S.Title>
                        <h2>
                            <span className="primary-color">/</span>about-me
                        </h2>
                        <p>Who am i?</p>
                    </S.Title>
                    <S.Description>
                        Hello, i’m Yusif!
                    </S.Description>
                    <S.Description>
                        I’m a self-taught front-end developer . I can develop responsive websites from scratch and raise
                        them
                        into modern user-friendly web experiences.
                    </S.Description>
                    <S.Description>
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        always
                        strive to learn about the newest technologies and frameworks.
                    </S.Description>
                    <Skills noLine/>
                    <S.MyFunFacts>
                        <SectionHeader name='my-fun-facts' noLine />
                        <S.Items>
                            <span>I like winter more than summer</span>
                            <span>I have no friends</span>
                            <span>const myLife = ["code", "music", "books", "movies"]</span>
                            <span>My favorite movie is Harry Potter</span>
                        </S.Items>
                    </S.MyFunFacts>
                </S.AboutMePageContainer>
            </motion.div>
        </>


    )
}
