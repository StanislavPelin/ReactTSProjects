import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from './pages/HomePage';
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ProfilesPage from "./pages/ProfilesPage.tsx";

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/profiles',
        element: <ProfilesPage/>,
        children: [
            {
                path: '/profiles/:profileId',
                element: <ProfilePage/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
