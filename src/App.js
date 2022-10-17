import logo from './logo.svg';
import './App.css';
import './test.css'; //외부 css 파일 import
import App2 from './App2'; //2개의 사용자 정의 태그가 1개의 웹페이지를 구성하게 함
import First from './compo/App3';
import Second from './compo/App4';

function App() {
  const name = "승환";
  const data = 'First';
  return (
    //JSX : 자바스크립트와 html을 같이 사용하는 개념
    <>
    <h1 className='first'>HELLO REACT</h1>
    <h1 style={{color:"red"}} id = "test">월요일 파이팅</h1>
    <h1>나의 이름은 {(name == '승환') ? name:'영표'}</h1>
    <App2></App2>
    {(data == 'First') ? <First></First> : <Second></Second>}
    </>
  );
} 

//사용자 정의 태그를 외부에서 쓸 수 있게 함
export default App;
