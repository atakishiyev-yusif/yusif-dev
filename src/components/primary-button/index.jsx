import * as S from './styles.jsx'
export const PrimaryButton = ({name, icon, href}) => {
  return <S.PrimaryButton href = {href}>{icon ? <span>{icon}</span> : ''}{name}</S.PrimaryButton>
}