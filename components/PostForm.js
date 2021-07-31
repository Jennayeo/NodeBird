import React, { useCallback, useState, useRef } from 'react';
import { Input, Form, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from "../reducers/post";

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    const onSubmit = useCallback(() => {
        dispatch(addPost)
        setText('') // 버튼눌렀을때 인풋박스 비워주기
        }, []);
        const onClickImageUpload = useCallback(() => {
            imageInput.current.click();
        }, [imageInput.current]);
        return (
            <Form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
                <Input.TextArea
                    value={text}
                    onChange={onChangeText}
                    maxLength={148}
                    placeholder="오늘 하루 어땠나요?"
                />
                <div>
                    <input type ="file" multiple hidden ref={imageInput} />
                    <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                    <Button type="primary" style={{float:'right'}} htmlType="submit">tweettweet</Button>
                </div>
                <div>
                    {imagePaths.map((v) => (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                        </div>
                    ))}
                </div>
            </Form>
        )
    };

export default PostForm;