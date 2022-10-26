function Ex01(props) {
    return(
        <>
            <h1 style={{color:props.color}}>첫 번째 컴포</h1>
            <h1>저의 이름은 {props.name}</h1>
            <h1>두번째 데이터 {props.ttt}</h1>
        </>
    )
};

export default Ex01;