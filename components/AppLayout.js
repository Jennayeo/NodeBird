// 일부 공통

import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { useState, useCallback } from 'react';

const AppLayout = ({ children }) => {
    // 로그인을 위한 더미데이터
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                {/* 검색창 */}
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
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
                    {isLoggedIn? <UserProfile /> : <LoginForm/>}
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