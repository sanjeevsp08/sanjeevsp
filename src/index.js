import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card1  from './Card1';
import {Card2} from './Card1';
import {Card3} from './Card1';
import {Card4} from './Card1';
import {Card5} from './Card1';
import {Card6} from './Card1';
import {Card7} from './Card1';
import {Card8} from './Card1';
import {Card9} from './Card1';
import {Card10} from './Card1';
import ONOff from './ONOff';
import Counter from './Counter';
import Routerex from './Routers';
import Namechanger from './NameChanger';
import DelayedAlert from './DelayedAlert';
import EmailValidation from './Emailvalidation';

import BasicForm from './Form';
import DemoDiv from './Demo';
import Notification from './Demo2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Notification/>
    <DemoDiv/>
    <EmailValidation/>
    <BasicForm/>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',height:'100vh '}}>
</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();