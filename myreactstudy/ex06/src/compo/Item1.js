import Item2 from "./Item2"; //Item2 컴포넌트를 모듈로 불러옴

function Item1(props){ //props로 속성 상속 받음
    return (
        //Item2 컴포넌트를 자식으로 넣음
        <div>
            {/* Item1에서 객체 형식으로 key : num, value : number를 전달 */}
            <h1>Item1 :{props.num}</h1>
            {/* 자식 컴포넌트에 num 변수 전달 */}
            <Item2 num={props.num}></Item2>
        </div>
    )
}

export default Item1;