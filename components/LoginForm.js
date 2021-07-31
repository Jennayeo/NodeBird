import { useState, useCallback } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    marginTop: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;
const LoginForm = ({ setIsLoggedIn }) => {
    // 로그인 데이터 액션 디스패치
    const dispatch = useDispatch();

    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    // 컴포넌트에 props로 넘겨주는 함수는 useCallback을 써야 최적화가된다.
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);

    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    // const onSubmitForm = (e) => {
        // e.preventDefault(); // 보통 form submit에서 이걸 해주는데, 앤트디자인엔 이미 포함되어있어 따로 안해준다.
    //}

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        // setIsLoggedIn(true);
        dispatch(loginAction({id, password}));
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input
                    name = "user-id"
                    value={id} 
                    onChange={onChangeId} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
};

// 데이터를 props로 받지않고 리덕스에서 받아오므로 이젠 이부분 필요없음
// LoginForm.propTypes = {
//     setIsLoggedIn: PropTypes.func.isRequired,

// };

export default LoginForm;