import * as S from './styles.jsx';
import {TelegramIcon} from "../../assets/icons/TelegramIcon.jsx";
import {GithubIcon} from "../../assets/icons/GithubIcon.jsx";
import {InstagramIcon} from "../../assets/icons/InstagramIcon.jsx";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <S.Footer>
            <S.About>
                <Link to = '/'>
                    <S.Logo>yusif.<span className="primary-color">dev</span></S.Logo>
                </Link>
                <S.Description>Junior front-end developer</S.Description>
            </S.About>
            <S.Media>
                <S.MediaItems>
                    {/*<a href= ''>*/}
                    {/*    <XIcon/>*/}
                    {/*</a>*/}
                    <a href='https://github.com/atakishiyev-yusif'>
                        <GithubIcon/>
                    </a>
                    <a href='https://www.instagram.com/yusifatakishiyev/'>
                        <InstagramIcon/>
                    </a>
                    <a href='https://t.me/yusifatakishiyev'>
                        <TelegramIcon/>
                    </a>
                    {/*<a href= 'https://www.youtube.com/@yusif_atakishiyev'>*/}
                    {/*    <YoutubeIcon />*/}
                    {/*</a>*/}
                </S.MediaItems>
            </S.Media>
        </S.Footer>
    )
}

