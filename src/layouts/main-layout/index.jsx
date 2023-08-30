
import * as S from './styles.jsx';
import {Header} from "../../components/header/index.jsx";
import {Footer} from "../../components/footer/index.jsx";
import {Main} from "../../components/main/index.jsx";

export const MainLayout = () => {
    return (
        <S.MainLayout>
            <Header/>
            <Main />
            <Footer/>
        </S.MainLayout>
    )
}