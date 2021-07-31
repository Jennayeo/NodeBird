import { Form, Input, Button } from 'antd';
import React, {useCallback} from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types'; // 검사도구, 서비스 안정을위해 사용 권유
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChangeCommentText] = useInput('');
    // 폼 만들기 번거로우니 커스텀 훅 useInput사용
    // const onChangeCommentText = useState();
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
    }, [commentText]);
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button type="primary" htmlType="submit"> 삐약 </Button>
            </Form.Item>
        </Form>
    );
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,

};

export default CommentForm;