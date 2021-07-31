import React, { useState, useCallback } from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { RetweetOutlined,HeartOutlined,MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
    // const { me } = useSelector((state) => state.user);
    // const id = me?.id;
    // 또는 한방에
    const id = useSelector((state) => state.user.me?.id); //옵셔널체이닝

    // 서버 통신 전 state로 대체
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev); // false는 true로 바꿔줌 vice versa
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev)
    })

    return (
        <div style={{ marginBottom: 20 }}>
            <Card
            //antd 기능
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked?
                        <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />:
                        <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id
                            ? (
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger">삭제</Button>
                                </>
                            ) :
                            <Button type="">신고</Button>
                    }
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
                {commentFormOpened && (
                <div>
                    <CommentForm post={post} />
                    {/* 댓글은 게시글에 포함되어있으니 게시글에대한 정보가 필요하므로 post넘겨줌 */}
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                        />
                    댓글 부분
                </div>)}
                {/* <Image /> */}
                {/* <Content /> */}
            </Card>
            {/* <CommentForm />
            <Comments /> */}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCard;