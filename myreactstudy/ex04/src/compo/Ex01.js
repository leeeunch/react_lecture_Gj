import axios from 'axios'
import {useState} from 'react'

function Ex01(){
    const [movieArray, setMovieArray] = useState([]) //movieArray가 array 형태이므로 기본값으로 []를 줘야함
    // const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";
        
    //     //axios 비동기 통신 방법으로 통신 진행
    // const result = axios.get(url) 
    // const array = result.data.boxOfficeResult.dailyBoxOfficeList;
    async function getMovies(){
        //json data 주소값
        const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";
        
        //axios 비동기 통신 방법으로 통신 진행
        const result = await axios.get(url) //get방식으로 통신
        //async~await를 적지 않는다면 통신에 대한 응답값으로 promise 타입이 반환됨
        // ==> 화면을 구성하는 컴포넌트들이 요청을 보낼 때 순차적으로 요청을 처리하기 위함
        console.log(result.data.boxOfficeResult.dailyBoxOfficeList);
        const array = result.data.boxOfficeResult.dailyBoxOfficeList;
        for (let i=0;i<10;i++) {
            console.log(array[i].rank , array[i].movieNm, array[i].openDt)
        }
        //10개의 영화 데이터 배열 --> 
    }
    function text(){
        const result = []
        for (let i=0; i < 10; i++) {
            result.push(<td>array[i].movieNm</td>)
        }
        return result;
    }

    return(
        <>
            <h1>영화 데이터 확인페이지</h1>
            <button onClick = {getMovies}>영화정보 가져오기</button>
            <table border="1">
                <tr>
                    <td>순위</td>
                    <td>제목</td>
                    <td>개봉일</td>
                </tr>
                {movieArray.map(function(movie){
                    return(
                        <tr>
                            <td>{movie.rank}</td>
                            <td>{movie.movieNm}</td>
                            <td>{movie.openDt}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default Ex01;