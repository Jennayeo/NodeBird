import { HYDRATE } from 'next-redux-wrapper';
import {combineReducers} from 'redux'; // 리듀서 하나로 합쳐주는 리덕스의 메서드
import user from './user';
import post from './post';


//액션 -> state를 바꾸고싶을때 액션을 만들어서 dispatch해준다. dispatch해주는 순간 리듀서로 전달된다.
// 액션 크리에이터
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// };




// 리듀서 -> 이전상태와 액션을 통해 다음상태를 만드는 함수
// 리듀서를 하나로 합쳐줌
const rootReducer = combineReducers ({
    // user, post리듀서를 합쳐주는건데 hydrate를 위해 index리듀서 추가
    index: (state = {}, action) => {
    switch (action.type) {
        case HYDRATE:  // hydrate는 for 리덕스 SSR
            console.log('HYDRATE', action);
            return { ...state, ...action.payload };
        
        // reducer "user" returned undefined during intialization이란 에러가 뜬다면
        default:
            return state;
    }          
},
user,
post,
});

export default rootReducer;