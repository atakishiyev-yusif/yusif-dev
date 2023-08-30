import * as S from "./styles.jsx";
import {Link} from "react-router-dom";

export const SectionHeader = ({name, viewAll, customIcon, noLine}) => {
    return (

        <S.SectionHeader id = 'section-header'>
            <S.TitleRow>
                <S.Title><span className="primary-color">{customIcon ? `${customIcon}` :  '#'}</span>{name}</S.Title>
                {noLine ? '' : <S.Line/>}
            </S.TitleRow>
            {viewAll && <a href='/projects'>View all -->  </a>}
        </S.SectionHeader>
    )
}

