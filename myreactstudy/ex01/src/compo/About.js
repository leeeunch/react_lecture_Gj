import {Link, useSearchParams} from 'react-router-dom'

function About (){
    const [params, setParamsId] = useSearchParams();
    //쿼리 스트링으로 넘긴 데이터는 paramsId에 저장되어있음
    const id = params.get("id");
    const nick = params.get("nick")
    return(
        <>
            <h1>{id}소개 페이지 입니다</h1>
            <h1>닉네임은 {nick}입니다</h1>
            <Link to="/">메인 페이지로 이동</Link>
        </>
    )
}

export default About;