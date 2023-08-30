import * as S from './styles.jsx';
import {PrimaryButton} from "../primary-button/index.jsx";
import {useEffect, useState} from "react";
import Prism from 'prismjs';
import '../../../node_modules/prismjs/themes/prism-dark.css';
import {ReactTerminal} from "react-terminal";
import Modal from 'react-modal';
import {Link} from "react-router-dom";


export const Hero = () => {
    const commands = {
        whoami: <>
            <span>
                Hello, <Link to='about-me'>i’m Yusif </Link>
                I’m a self-taught front-end developer . I can develop <Link to='projects'>responsive websites</Link> from scratch and raise them into modern user-friendly web experiences.
                <Link to='about-me'>...see more</Link>,
            </span>
        </>,
        age: "17",
        skills: "['HTML', 'CSS', 'JavaScript' , 'Bootstrap', 'React', 'Tailwind', 'Styled Components']",
        instagram: <a href='https://www.instagram.com/yusifatakishiyev/'>@yusifatakishiyev</a>,
        discord: <a href='https://discord.com/users/1000285073033142303'>@yusifatakishiyev</a>,
        telegram: <a href='https://t.me/yusifatakishiyev'>@yusifatakishiyev</a>,
        github: <a href='https://github.com/atakishiyev-yusif'>atakishiyev-yusif</a>,
        email: <a href='mailto:yusifatakishiyev@proton.me'>yusifatakishiyev@proton.me</a>,
        allMedias:
            <>
                <a href='https://www.instagram.com/yusifatakishiyev/'>instagram</a>
                <br/>
                <a href='https://discord.com/users/1000285073033142303'>discord</a>
                <br/>
                <a href='https://t.me/yusifatakishiyev'>telegram</a>
                <br/>
                <a href='https://github.com/atakishiyev-yusif'>github</a>
                <br/>
                <a href='mailto:yusifatakishiyev@proton.me'>email</a>
                <br/>
                <Link style={{color: 'blue', textDecoration: 'underline'}} to='contacts'>
                    see all medias
                </Link>
            </>,
        cd: (directory) => `changed path to ${directory}`
    };


    useEffect(() => {
        Prism.highlightAll();
    }, [])


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            color: 'var(--white)',
            background: 'var(--background)',
            width: '50%',
            height: '70%',
            borderRadius: '20px',
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (

        <S.Hero id='hero'>
            <S.HeroContent>
                <S.Title>
                    Yusif is a <span className="primary-color">front-end developer</span>
                </S.Title>
                <S.Description>
                    He crafts responsive websites where technologies meet creativity
                </S.Description>
                <Link to='contacts'>
                    <PrimaryButton name='Contact me!!'/>
                </Link>

            </S.HeroContent>
            <S.Terminal>
                <ReactTerminal
                    commands={commands}
                />
                <S.TerminalCommandButton onClick={openModal}>terminal commands <span>?</span></S.TerminalCommandButton>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    overlayClassName="overlayModal"
                >
                    <button onClick={closeModal}>x</button>
                    <S.CommandsTitle>Commands <span style={{color: 'red'}}>!!</span></S.CommandsTitle>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> whoami - <span
                        className="rubik-font">you can go to the about me page by clicking see more</span>🙂</p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> age - <span
                        className="rubik-font">age</span> 💫</p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> skills - <span
                        className="rubik-font">skills</span> 🧑🏻‍💻</p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> instagram - <span
                        className="rubik-font">you can go to my instagram account by clicking the link</span> 📷</p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> discord - <span
                        className="rubik-font">you can go to my discord account by clicking the link</span> 🤖</p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> telegram - <span
                        className="rubik-font">you can go to my telegram account by clicking the link</span></p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> github - <span
                        className="rubik-font">you can go to my github account by clicking the link</span></p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> email - <span
                        className="rubik-font">you can go to my email account by clicking the link</span> 📧</p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> allMedias - <span
                        className="rubik-font">you can go to my email account by clicking the link</span> 👻</p>
                    <p style={{background: '#40404D'}}></p>
                    <p style={{background: '#40404D'}}><span className="primary-color">>>></span> clear - <span
                        className="rubik-font">clear terminal</span> 🚮</p>
                    <p style={{background: '#40404D'}}></p>
                </Modal>
            </S.Terminal>

        </S.Hero>
    )
}






