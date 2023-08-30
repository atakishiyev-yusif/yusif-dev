import {Hero} from "../../components/hero";
import {Quote} from "../../components/quote";
import {Projects} from "../../components/projects";
import {Skills} from "../../components/skills";
import {AboutMe} from "../../components/about-me";
import {Contacts} from "../../components/contacts";
import {useEffect} from "react";
import {motion} from "framer-motion";

export const IndexPageContainer = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    },[])
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
        >
            <Hero/>
            <Quote/>
            <Projects splice = {true}/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
        </motion.div>

    )
}