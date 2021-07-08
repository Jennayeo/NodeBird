import AppLayout from '../components/AppLayout';
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
// import FolllowerList from '../components/FolllowerList';


const Profile = ()=> {
    const followingList = [{ nickname: 'jenna'}, {nickname:'hello'}, {nickname: 'good'}];
    const followerList = [{ nickname: 'jenna'}, {nickname:'hello'}, {nickname: 'good'}];

    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
    <AppLayout>
        my profile page
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>
    </AppLayout>
    </>
    );
};

export default Profile;