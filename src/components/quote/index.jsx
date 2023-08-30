import * as S from './styles.jsx';
import {QuoteIcon} from '../../assets/icons/QuoteIcon.jsx';
export const Quote = () => {
  return (
    <S.Quote>
        <S.QuoteText>
            <p>A user interface is like a joke. If you have to explain it, it’s not that good.</p>
            <S.QuoteIconLeft>
                <QuoteIcon/>
            </S.QuoteIconLeft>
        </S.QuoteText>
        <S.QuoteAuthor>
            <p>- Unknown</p>
            <S.QuoteIconRight>
                <QuoteIcon/>
            </S.QuoteIconRight>
        </S.QuoteAuthor>

    </S.Quote>
  )
}

