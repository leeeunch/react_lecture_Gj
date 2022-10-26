import {useEffect, useState} from 'react';

function Ex01() {
    const [data, setData] = useState(0);
    const [data1, setData1] = useState(0);

    //useEffect : 랜더링 되자마자 이거부터 실행해주세요!
    //--> 상태값이 바뀔 때(다시 랜더링될 때)마다 다시 실행시킴
    useEffect(function(){
            console.log("test");
        }, [data] //[data] : data 상태 값이 바뀔 때만 useEffect가 실행됨
    )

    function plusData(){
        setData(data+1)
    }
    function minusData(){
        setData(data-1)
    }
    function plusData1(){
        setData1(data1+1)
    }
    function minusData1(){
        setData1(data1-1)
    }


    return(
        <>
            <h1>useEffect 첫번째</h1>
            <button onClick={plusData}>+</button>
            <span>{data}</span>
            <button onClick={minusData}>-</button>
            <br></br>
            <button onClick={plusData1}>+</button>
            <span>{data1}</span>
            <button onClick={minusData1}>-</button>
        </>
    )
}

export default Ex01;