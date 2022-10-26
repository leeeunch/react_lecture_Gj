import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App은 App.js 
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
//BrowserRouter : 컴포넌트에서 router 기능을 사용할 수 있게끔 만들어줌

const root = ReactDOM.createRoot(document.getElementById('root')); //root 요소를 react로 표현할 수 있게함
root.render(
  //안전 장치 //없어도 사용 가능 
  //<App /> : 실질적 태그 App.js와 연결됨
  <React.StrictMode> 
    <App />
  </React.StrictMode>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
