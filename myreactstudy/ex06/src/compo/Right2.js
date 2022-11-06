import {useDispatch} from 'react-redux' //useDispatch : store에 연결 되어있는 reducer를 실행시켜줘 

function Right2() {
    const dispatch = useDispatch(); //right2와 연결된 reducer를 실행시켜 다음과 같은 메시지를 나타냄
    return(
        <div>
            <h1>Right2</h1>
            {/* 버튼을 누르면 dispatch에 plus 액션 객체 호출 
            dispatch가 reducer에 명령을 보냄*/}
            <button onClick={() =>dispatch({type:'plus'})}>+</button>
        </div>
    )
}

export default Right2;