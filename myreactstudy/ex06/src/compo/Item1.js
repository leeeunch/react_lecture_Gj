import {useSelector} from 'react-redux';
import Item2 from "./Item2"; //Item2 컴포넌트를 모듈로 불러옴

function Item1(){ 
    const name = useSelector((state) => state.name); //name 상수에 state의 name 값 할당
    return ( 
        //Item2 컴포넌트를 자식으로 넣음
        <div>
            <h1>Item1 : {name}</h1>
            <Item2></Item2>
        </div>
    )
}

export default Item1;