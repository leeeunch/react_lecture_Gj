import Right2 from "./Right2";
import {useDispatch} from 'react-redux';

function Right1() {
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right1</h1>
            {/* 버튼을 누르면 dispatch에 name 액션 객체 호출 */}
            <button onClick={()=>dispatch({type:'name'})}>이름추가</button>
            <Right2></Right2>
        </div>
    )
}

export default Right1;