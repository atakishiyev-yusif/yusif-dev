import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/main-layout/index.jsx";
import {LangAzPageContainer} from "../containers/lang-az-page-container/index.jsx";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/hey",
                element: <LangAzPageContainer />,
            },
            {
                path: "/asd",
                element: <h1>bu bir test mesaji</h1>,
            },
        ],
    },
]);