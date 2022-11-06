import Ex01 from './compo/Ex01';

//props : 부모가 자식에게 속성 값 전달할 때 사용
function App() { //App : 부모 컴포넌트
  const name = "은찬";
  const myColor = "red";
  return (
    <Ex01 name={name} ttt="124" color={myColor}></Ex01> //Ex01 : 자식 컴포넌트
  );
}

export default App;