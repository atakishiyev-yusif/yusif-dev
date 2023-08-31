
import * as S from './styles.jsx';
import {Header} from "../../components/header/index.jsx";
import {Footer} from "../../components/footer/index.jsx";
import {Main} from "../../components/main/index.jsx";
import {useEffect} from "react";

export const MainLayout = () => {
    let consoleTitle =
        "color: #222;" +
        "font-size: 60px;" +
        "font-weight: bold;" +
        "text-shadow: 1px 1px 5px #fff;" +
        "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";

    let consoleSubtitle =
        "color: var(--white);" +
        "font-weight: 500;" +
        "font-size: 16px;" +
        "text-shadow: 1px 1px 5px #C778DD;" +
        "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";

    useEffect(() => {
        console.log("%cHello People!", consoleTitle);
        console.log("%cThis is a browser feature designed for developers.\n" +
            "You can contact me if you have a problem 💬 \n" +
            "I suggest you return to my portfolio :)\n" +
            " \n"+
            "Have a good day 🙂", consoleSubtitle);

    })
    return (
        <S.MainLayout>
            <Header/>
            <Main />
            <Footer/>
        </S.MainLayout>
    )
}