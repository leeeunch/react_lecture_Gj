import {useState} from 'react' 
//useState : react에서 기본적으로 제공하는 기능 (Hooks)
//상태값을 만들 수 있는 기능 제공
//상태값 : 화면이 보여진 후에도 값이 바뀌면 화면도 바뀔 수 있는 값

function Ex02() {
    const [result2, setResult2] = useState("일단 야근"); //useState(result2의 초기 값)
    //result2 --> 상태 값을 나타낼 수 있는 값
    //setResult2 --> 상태 값을 바꿀 수 있는 함수
    //비구조 할당 방법

    let result = "야근"; //일반변수 //값이 바뀌더라도 다시 바뀐 값으로 보여지지 않음  
    //화면이 제일 처음 랜더링 됐을 때 사용자에게 보여짐
    function chResult(){
        result="칼퇴!!!!";
        console.log(" 1 :"+result);
        setResult2("칼퇴"); //포함된 함수에서 시행 순서가 가장 마지막 //아래 코드가 먼저 실행됨 (값이 변하기 전에 출력됨)
        console.log(" 2 :"+result2); 
    }

    return (
        <>
            <h1>두 번째 컴포 useState</h1>
            <h1>오늘은 {result}</h1>
            <h1>오늘은2 {result2}</h1>
            <button onClick={chResult}>바꾸기</button>
        </>
    )
}

export default Ex02;