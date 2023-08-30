import * as S from './styles.jsx';
import {GithubIcon} from "../../assets/icons/GithubIcon.jsx";
import {InstagramIcon} from "../../assets/icons/InstagramIcon.jsx";
import {TelegramIcon} from "../../assets/icons/TelegramIcon.jsx";
import {YoutubeIcon} from "../../assets/icons/YoutubeIcon.jsx";

export const Media = () => {
    return (
        <S.Media>
            <S.Line/>
            <S.MediaItem href = 'https://github.com/atakishiyev-yusif'>
                <GithubIcon/>
            </S.MediaItem>
            <S.MediaItem href = 'https://www.instagram.com/yusifatakishiyev/'>
                <InstagramIcon/>
            </S.MediaItem>
            <S.MediaItem href = 'https://t.me/yusifatakishiyev'>
                <TelegramIcon />
            </S.MediaItem>
            {/*<S.MediaItem>*/}
            {/*    <YoutubeIcon to = '/youtube' />*/}
            {/*</S.MediaItem>*/}
        </S.Media>
    )
}

