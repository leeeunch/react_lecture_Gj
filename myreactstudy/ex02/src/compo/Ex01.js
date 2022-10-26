// map 함수
import {useState} from 'react'
function Ex01() {
    // const array = ['눈', '바람', '비', '해'];
    const [array, setArray] = useState(['눈', '바람', '비', '해']); //setArray : array 상태 값을 바꿔주는 함수
    function deleteData(e) {
        //e.target.value
        setArray(array.filter(function(data, index) { //array 상태값을 바뀌줌 //data : array의 각각 원소 //index : array의 각각 원소의 인덱스
            return index != e.target.value; //1인덱스의 값을 클릭하면 0,2,3 인덱스의 값이 추출됨
        }));
    }
    return(
        //array 배열을 map 함수로 받아와서 각 원소를 하나씩 li 태그로 시각화함
        //li 태그의 key값과 button 태그의 value값을 모두 각 원소의 index로 받음
        //삭제 버튼을 누르면, deleteData 함수 실행
        <>
            <ul>
                {array.map(function(data, index) {
                    return <li key={index}>{data}<button value={index} onClick={deleteData}>삭제</button></li>
                })}
            </ul>
        </>
    )
}
export default Ex01;