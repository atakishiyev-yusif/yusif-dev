import * as S from './styles.jsx'
import {SectionHeader} from "../../components/section-header/index.jsx";
import {Contacts} from "../../components/contacts/index.jsx";
import {useEffect} from "react";
import {motion} from "framer-motion";

export const ContactsPageContainer = () => {
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
        <S.ContactsPageContainer>
            <S.Content>
                <Contacts noReadMore noLine customIcon='/'/>
                <S.AllMedia>
                    {/*<SectionHeader name='all-media'/>*/}
                    {/*<S.MediaItems>*/}
                    {/*    <S.MediaItem>*/}
                    {/*        <span>icon</span>*/}
                    {/*        <span>username</span>*/}
                    {/*    </S.MediaItem>*/}
                    {/*    <S.MediaItem>*/}
                    {/*        <span>icon</span>*/}
                    {/*        <span>username</span>*/}
                    {/*    </S.MediaItem>*/}

                    {/*</S.MediaItems>*/}
                </S.AllMedia>
            </S.Content>

        </S.ContactsPageContainer>
        </motion.div>

    )
}