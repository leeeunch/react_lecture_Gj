import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
//버튼 없이 아이디값과 pw를 입력하면 

function Ex04() {

    const nav = useNavigate(); //주소 경로를 입력받아 요청해줄 수 있는 Hook

    const [inputData, setInputData] = useState('로그인 실패');
    const [inputId, setId] = useState("아이디입력");
    const [inputPw, setPw] = useState("비밀번호 입력");
    const [inputNick, setInputNick] = useState('');
    const [button, clickButton] = useState('')
    
    // let id = "";
    // let pw = "";

    //useEffect는 랜더링되었을 때 시행됨 (상태값이 바뀔때 시행됨)
    useEffect(function() {
        if(inputId == "smhrd" && inputPw == 123) {
            setInputData("SMHRD님 환영합니다")
            nav("/about?id=smhrd&nick="+inputNick)
        } else {
            setInputData("로그인실패")
            console.log(inputData)
        }
    },[button]) //inputNick 값이 업데이트될 때만 useEffect가 시행됨

function getId(e) {
    setId(e.target.value);
} 

function changeNick(e) {
    setInputNick(e.target.value);
}

function returnNick() {
    clickButton('값');
}

// function click() {
//     if(inputId == "smhrd" && inputPw == 123) {
//         setInputData("SMHRD님 환영합니다")
//         nav("/about?id=smhrd")
//     } else {
//         setInputData("로그인실패")
//     }
// }

// function chId(){
//     setId(id);
// }

function getPw(e) {
    setPw(e.target.value);
} 
// function chPw(){
//     setPw(pw);
// }
    return (
        <>
        ID : <input onChange={getId}></input>
        <br></br>
        PW : <input onChange={getPw}></input>
        <br></br>
        {/* Nick : <input onChange={(e)=>setInputNick(e.target.value)}></input>닉네임 input */}
        Nick : <input onChange={changeNick}></input>{/*닉네임 input */}
        <button onClick = {returnNick}>로그인</button>
        {/* <button onClick={() => {
            chPw()
            chId()}}>로그인</button> */}
        {/* <h1>{(inputId == 'smhrd' && inputPw == '123') ? 'SMHRD님 환영합니다':'로그인실패'}</h1> */}
        <br></br>
        <Link to="/">메인 페이지로 이동</Link>
        </>
    )
}

export default Ex04;