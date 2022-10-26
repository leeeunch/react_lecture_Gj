import {useState} from 'react'


//추가하는 내용이 todoArray에 추가되도록 하기
function Ex02() {
    const [inputValue, setValue] = useState(""); //setValue : inputValue값을 바꿔주는 함수 
    const [todoArray, setTodoArray] = useState([]);

    function getValue(e) {
        setValue(e.target.value); //inputValue값을 e.target.value로 바꿔줌
    }

    function setTodo(){ 
        //todoArray에 inputdata 추가
        //리엑트에서 배열에 값을 추가할 때는 concat을 사용
        //불변성 유지 : 상태값을 업데이트 할때는 기존 상태를 그대로 두면서 새로운 값으로 상태를 업데이트 함
        //index : 숫자 타입 //e.target.value : 문자열
        setTodoArray(todoArray.concat(inputValue))
    }

    function deleteList(e) {
        //e.target.value 
        setTodoArray(todoArray.filter(function(Data, index) { //array 배열을 바꿔줘야하기 때문에 array배열을 변경할 때마다 setToArray 함수 사용
            return index != e.target.value;
        }))
    }


    return (
        <>
        <h1>TodoList</h1>
        <input onChange={getValue}></input>  {/*input값이 바뀔 때 마다 getValue 함수 실행*/}
        <button onClick ={setTodo}>추가</button> {/*버튼 클릭시마다 inputValue를 todoArray에 추가*/}
        {todoArray.map(function(data){ 
            return <div>
            <h1 value = {data}>{data}</h1>
            <button onClick = {deleteList}>삭제</button>
            </div>
        })}
        </>
    )
}
export default Ex02;