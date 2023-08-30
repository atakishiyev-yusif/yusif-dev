import * as S from './styles';
import {Hero} from "../hero/index.jsx";
import {Quote} from "../quote/index.jsx";
import {Projects} from "../projects/index.jsx";
import {Skills} from "../skills/index.jsx";
import {AboutMe} from "../about-me/index.jsx";
import {Contacts} from "../contacts/index.jsx";
import {Outlet} from "react-router-dom";

export const Main = () => {
  return(
      <S.Main>
        <Outlet />
      </S.Main>
  )
}