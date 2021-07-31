import AppLayout from "../components/AppLayout";

import {useSelector} from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    // 위처럼 구조분해하지않고 mainPosts = ... state.post.mainPosts 처럼 해도됨

    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}
            {/* map사용시 key를 넣어주어야하는데 반복문이 바뀐다싶을때는 index는 넣으면 안됨(안티패턴)             */}
        </AppLayout>
    );
}

export default Home;