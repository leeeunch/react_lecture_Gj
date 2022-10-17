import logo from './logo.svg';
import './App.css';
import './test.css'; //외부 css 파일 import
 
function App() {
  const name = "승환";
  return (
    //JSX : 자바스크립트와 html을 같이 사용하는 개념
    <>
    <h1>HELLO REAC</h1>
    <h1 style={{color:"red"}} id = "test">월요일 파이팅</h1>
    <h1>나의 이름은 {(name == '승환') ? name:'영표'}</h1>
    </>
  );
} 

//사용자 정의 태그를 외부에서 쓸 수 있게 함
export default App;
