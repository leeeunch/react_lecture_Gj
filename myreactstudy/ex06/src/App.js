import logo from './logo.svg';
import './App.css';
import Item1 from './compo/Item1';
import Item2 from './compo/Item2';
import Item3 from './compo/Item3';
import {useState} from 'react';

//리덕스 재료 준비
import { createStore } from 'redux'; //createStore : state 값을 저장하는 역할
import { Provider } from 'react-redux'; //Provider : state값을 어떤 컴포넌트와 공유, 제공할 건지 정의

function App() {

  const [number, setNumber] = useState(3); //number 초기값 3

  return (
    <div id="container">
      <h1>Root : {number}</h1>
       {/* 자식 컴포넌트에 num 변수 전달 */}
      <Item1 num={number}></Item1>
    </div>
  );
}

export default App;
