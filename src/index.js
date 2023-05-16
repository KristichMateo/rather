import React from 'react'
import ReactDom from 'react-dom/client'
import {Formulario} from './components/index/formulario.jsx'
import { App } from './app.jsx';
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <>
    <App></App>
    </>
)