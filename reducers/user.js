export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                //...state, // initial state 객체 펴줌
                //state.name // 이런식으로 직접 바꿔주면 참조관계 유지로 히스토리가 안남음 그래서 객체 리턴
                // user: {
                    ...state, // 이니셜스테이트안에 유저 객체 // 바뀌지않는 데이터(스프레드로 참조관계 유지)
                    isLoggedIn: true, // 내가 바꾸고싶은 데이터
                    me: action.data,
            };
        case 'LOG_OUT':
        return {
            //...state, // initial state
            //state.name // 이런식으로 직접 바꿔주면 참조관계 유지로 히스토리가 안남음 그래서 객체 리턴
            // user: {
                ...state,
                isLoggedIn: false,
                me: null,
        };
        
        default:
            return state;
    }
};

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

export default reducer;