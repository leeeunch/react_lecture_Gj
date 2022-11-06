import logo from './logo.svg';
import './App.css';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';
import Ex03 from './compo/Ex03';
import Ex04 from './compo/Ex04';
import Home from './compo/Home';
import {Routes, Route} from "react-router-dom";
import About from './compo/About';
import Header from './compo/Header';
//Routes : 여러 개의 페이지(컴포넌트)에 대한 정보를 갖고 있는 태그
//Route : 페이지(컴포넌트)에 경로(주소)를 부여해 줄 수 있는 역할 

//props : 부모가 자식에게 속성 값 전달할 때 사용
function App() { //App : 부모 컴포넌트
  const name = "승환";
  const myColor = "red"; //Ex01 컴포넌트로 전달
  return (
    //<Ex01 name={name} ttt="124" color={myColor}></Ex01> //Ex01 : 자식 컴포넌트
    //<Ex02></Ex02>
    //<Ex03></Ex03>


    <>
    <Header></Header>
    {/* <Switch></Switch> : routes의 옛날 버전 */}
      <Routes>
        <Route path="/login" element={<Ex04></Ex04>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path = "/about" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
