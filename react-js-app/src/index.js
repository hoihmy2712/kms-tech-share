import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ListUserComponent from "./component/ListUserComponent";
import AddUserComponent from "./component/AddUserComponent";
import EditUserComponent from "./component/EditUserComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListUserComponent/>,
    },
    {
        path: "/users",
        element: <ListUserComponent/>,
    },
    {
        path: "/add-user",
        element: <AddUserComponent/>,
    },
    {
        path: "/edit-user",
        element: <EditUserComponent/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
