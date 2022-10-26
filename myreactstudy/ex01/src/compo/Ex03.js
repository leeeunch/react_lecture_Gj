import {useState} from 'react';

function Ex03() {
    const [inputData, setInputData] = useState("");
    let data = "";

function getData(e) {
    // e --> 이벤트 객체 : 이벤트가 일어나는 전반적인 정보를 가지고 있음
    //e.target --> 이벤트를 실행시킨 주체를 가져옴 (input)
    console.log(e.target.value); //e.target.value : input에 입력된 값을 가져옴
    data = e.target.value;
}
function chData(){
    setInputData(data);

}
    return (
        //onChange: 값이 바뀔 떄마다 실행하는 함수
        <>
        <input onChange={getData}></input> 
        <button onClick={chData}>상태 값 바꾸기</button>
        <h1>{inputData}</h1>
        </>
    )
}

export default Ex03;