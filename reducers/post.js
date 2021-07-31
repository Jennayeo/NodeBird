export const initialState = {
    mainPosts: [{
        // 가짜데이터
        id: 1,
        User: {
            id: 1,
            nickname: 'jennayeo',
        },
        content: 'first posting #hello #world',
        Images: [{
            src: 'https://bomi.s3.ap-northeast-2.amazonaws.com/IMG_6564.JPG'}, {
            src: 'https://bomi.s3.ap-northeast-2.amazonaws.com/IMG_6564.JPG'
            },
            {
            src: 'https://bomi.s3.ap-northeast-2.amazonaws.com/IMG_6564.JPG'
            }
        ],
    Comments: [{
        User: {
            nickname: 'jenna',
        },
        content: 'hello jenna:)',
    }, {
        User: {
            nickname: 'jero',
        },
        content: 'have a great day!'
    }]
}],
imagePaths: [],
postAdded:false, // 게시글이 추가되면 true로 바뀜
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;