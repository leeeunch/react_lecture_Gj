import logo from './logo.svg';
import './App.css';
import Join from './compo/join';
import Login from './compo/login';
import Main from './compo/main';
import React, {Component} from 'react';
//주소값 부여
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux 재료 import
import { createStore } from 'redux';
import {Provider} from 'react-redux';

function reducer(currentState, action){
  //currentState : 현재 state 값
  //action : 컴포넌트에서 넘긴 message
  //currentState 기본값 설정
  if (currentState === undefined) {
    return {
      id : 'Test',
      pw : '',
      nick : ''
    };
  } 
  //값을 바꿔줄 때 각각 값들에 ;을 붙여줘야 함
  //접근하는 데이터가 어떤 타입인지 계속 확인하기
  else if (action.type == 'change') {
     currentState.id = action.id; //dispatch의 값이 action으로 전달되기 때문에 action의 key값으로 접근
     currentState.pw = action.pw;
     currentState.nick = action.nick;
  } else if (action.type == 'login') {
    
  }

  //action에 있는 값을(message)를 가져와서 state 변경 로직

  //변경 후 -> 반환
  return {...currentState} //...은 currentState의 모든 값을 전달한다는 의미

}

//저장 공간에 reducer가 바로 접근 가능
const store = createStore(reducer);

function App () {
  return (
    //Provider안에 route를 넣음으로써 하위 컴포넌트들은 모두 store에 접근 가능
    <>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Join></Join>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Main' element={<Main></Main>}></Route>
      </Routes>
    </Provider>
    </>
  )
}


export default App;
