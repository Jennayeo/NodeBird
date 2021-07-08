import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">헬로우<br />8</div>,
                <div key="followings">팔로잉<br />8</div>,
                <div key="followers">팔로워<br />8</div>
            ]}>
            <Card.Meta
                avatar={<Avatar>JY</Avatar>}
                title="Jenna Yeo"
                />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;