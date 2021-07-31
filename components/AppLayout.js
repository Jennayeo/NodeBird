// 일부 공통

import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux'; // 리덕스 데이터 가져오기
import { createGlobalStyle } from 'styled-components';

// Gutter문제 제거(하단 스크롤)
const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col: first-child {
        padding-left: 0 !important;
    }

    .ant-col: last-child {
        padding-right: 0 !important;
    }
`;

// 앤트디자인의 컴포넌트 스타일 커스텀하기
const SearchInput = styled(Input.Search)`
    vertical-align: 'middle'
`;

const AppLayout = ({ children }) => {
    // 로그인을 위한 더미데이터
    // const [isLoggedIn, setIsLoggedIn] = useState(false); // 리덕스를 사용하니 state더이상 필요가없다.
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // 리덕스 state에서 가져옴
    // = const { isLoggedIn } = useSelector((state) => state.user);
    // isLoggedIn이 바뀌면 리렌더링 된다.
    
    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                {/* 검색창 */}
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {/* 반응형 Grid
                gutter는 컬럼사이의 간격*/}
            <Row gutter={8}>
                {/* 모바일 버전 세로 24개의 column이 있을때 데스크탑버전에선 6/24만 차지한다 */}
                <Col xs={24} md={6}>
                    {/* {isLoggedIn? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>} */}
                    {/* LoginForm에서 setIsLoggedIn가 true로 바뀌는 순간(로그인하는 순간) isLoggedIn이 true로 바뀜 */}
                    {/* 데이터가 다 흝어져있어 props로 데이터를 넘겨줄때 setIsLoggedIn을 사용했지만 이젠 리덕스에서 관리를 한다. */}
                    {isLoggedIn? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col> 
                <Col xs={24} md={6}>
                    <a href="https://jennayeo.tistory.com" target="_blank" rel="noreferrer noopener">made by JennaYeo</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;