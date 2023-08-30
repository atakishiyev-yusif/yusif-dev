import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import './styles/reset.css';
import './styles/global.css';

import {MainLayout} from "./layouts/main-layout/index.jsx";
import {IndexPage} from "./pages/index-page/index.jsx";
import {ProjectsPage} from "./pages/projects-page/index.jsx";
import {AboutMePage} from "./pages/about-me-page/index.jsx";
import {ContactsPage} from "./pages/contacts-page/index.jsx";

import { TerminalContextProvider } from "react-terminal";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TerminalContextProvider>
            <RouterProvider router={createBrowserRouter([
                {
                    element: <MainLayout/>,
                    children: [
                        {
                            index: true,
                            element: <IndexPage />,
                        },
                        {
                            path: '/projects',
                            element: <ProjectsPage />
                        },
                        {
                            path: '/about-me',
                            element: <AboutMePage />
                        },
                        {
                            path: '/contacts',
                            element: <ContactsPage />
                        }
                    ]
                }
            ])}/>
        </TerminalContextProvider>

    </React.StrictMode>,
)
