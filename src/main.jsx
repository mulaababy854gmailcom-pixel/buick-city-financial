import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Import BrowserRouter
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root');
const app = <React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>;
if(root.dataset.prerender) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
