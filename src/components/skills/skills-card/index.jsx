import * as S from './styles.jsx';

export const SkillsCard = ({title, skillItems}) => {
  return (
      <S.SkillsCard>
          <S.Title><h4>{title}</h4></S.Title>
          <S.CardContent>
              {skillItems.map(item => <span>{item}</span> )}
          </S.CardContent>
      </S.SkillsCard>
  )
}