import logo from './logo.svg';
import './App.css';
import Item1 from './compo/Item1';
import Item2 from './compo/Item2';
import Item3 from './compo/Item3';
import Right1 from './compo/Right';
import {useState} from 'react';

//리덕스 라이브러리 준비
import { createStore } from 'redux'; //createStore : state 값을 저장하는 역할 //밑줄은 jsp 확장형식을 권장하여 생긴 것 (신경안써도 됨)
import { Provider } from 'react-redux'; //Provider : state값을 어떤 컴포넌트와 공유, 제공할 건지 정의해주는 컴포넌트

const store = createStore(reducer); //여기서 선언해도 되나?

//reduder : store에 접근해서 state에 관련된 작업을 처리할 기능
//---> 현재의 상태값, 어떤 작업(action)을 처리할지가 필요함
function reducer(currentState, action){
  if (currentState === undefined) { //reducer를 맨 처음 store에 적용될때 currentState가 정의되어있지 않음 //이때 store랑 연결될 수 있는 state값을 만들어주는 것 
    return{
      number : 1 //다른 컴포넌트에서 사용가능한 상태값
    };
  }
  //currentState가 undefined가 아니고 다른 상태값에 따른 명령이 들어왔다면 밑에서 처리 가능
  if(action.type == 'plus') { //action 객체의 타입이 plus라면 number key의 value에 1을 더함
    currentState.number++;
  } else if (action.type = 'name'){ //action 객체의 타입이 name key에 value "승환" 할당
    currentState.name = "승환";
  }
  return {...currentState}; //...: 객체에 대한 모든 정보를 가져옴 //currentState안의 모든 정보를 꺼내옴

}

//const store = createStore(reducer); //state 값을 저장시킬 저장소 생성

function App() {

  const [number, setNumber] = useState(3); //number 초기값 3

  return (
    <div id="container">
      <h1>Root : {number}</h1>
      {/* 위에서 만들어 놓은 store와 연결시킨 후 해당 내용을 하위 컴포넌트에 제공한다는 의미 
      하위 컴포넌트가 사용하고 있는 다른 컴포넌트에도 store 제공 가능*/}
      <div id="grid">
        {/* provider 하위컴포넌트에서 store에 접근이 가능해짐 (Itme1~3,Right1~2) */}
        <Provider store={store}>
          {/* 자식 컴포넌트에 num 변수 전달 */}
          <Item1></Item1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App;
