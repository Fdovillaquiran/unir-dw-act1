import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'

import { CineApp } from "./CineApp";

ReactDOM.createRoot( document.querySelector('#root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <CineApp />
        </BrowserRouter>
    </React.StrictMode>
)