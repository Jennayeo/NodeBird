import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = ( )=> {
    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
    <AppLayout>my profile page</AppLayout>
    </>
    );
};

export default Profile;