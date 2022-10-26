import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
            <h1>Home</h1>
            <p>Main Page</p>
            {/* 리엑트에서 라우터를 통한 페이지 이동을 할 때는 a 태그보다 link태그를 사용
            a태그는 새로고침 후 이동되기 때문 */}
            <a href="./login">로그인 페이지로 이동</a>
            <br></br>
            <Link to="./login">로그인 페이지로 이동2</Link>
            <br></br>
            <Link to="./about">소개 페이지로 이동</Link>
        </>
    )
}

export default Home;