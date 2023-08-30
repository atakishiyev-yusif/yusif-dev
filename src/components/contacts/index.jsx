import * as S from './styles.jsx';
import {SectionHeader} from "../section-header/index.jsx";
import {MailIcon} from "../../assets/icons/MailIcon.jsx";
import {PrimaryButton} from "../primary-button/index.jsx";
import {Link} from "react-router-dom";
import {TelegramIcon} from "../../assets/icons/TelegramIcon.jsx";
import {DiscordIcon} from "../../assets/icons/DiscordIcon.jsx";

export const Contacts = ({noReadMore, noLine, customIcon}) => {
  return (
    <S.Contacts id = 'contacts'>
        <SectionHeader name= 'contacts' noLine customIcon={customIcon} />
        <S.Content>
            <S.Description>
                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </S.Description>
            <S.MessageHere>
                <S.Title>Message me here</S.Title>
                <S.MessageApp type = 'email' href = 'mailto:yusifatakishiyev@proton.me'>
                    <S.AppIcon><MailIcon /></S.AppIcon>
                    <S.AppName>yusifatakishiyev@proton.me</S.AppName>
                </S.MessageApp>
                <S.MessageApp href = 'https://t.me/yusifatakishiyev'>
                    <S.AppIcon><TelegramIcon /></S.AppIcon>
                    <S.AppName>@yusifatakishiyev</S.AppName>
                </S.MessageApp>
                <S.MessageApp href = 'https://discord.com/users/1000285073033142303'>
                    <S.AppIcon><DiscordIcon /></S.AppIcon>
                    <S.AppName>@yusifatakishiyev</S.AppName>
                </S.MessageApp>
            </S.MessageHere>
        </S.Content>
        {noReadMore ? ''
            :
            <Link to="/contacts">
                <PrimaryButton name='Read more ->'/>
            </Link>
        }

    </S.Contacts>
  )
}

