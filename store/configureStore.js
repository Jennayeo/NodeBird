// 스토어는 state & reducer 포함

import { createWrapper } from 'next-redux-wrapper';
import { compose, createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from '../reducers';

const configureStore = () => {
    const middlewares = []; // 배열엔 사가나 청크가 들어간다.
    const enhancer = process.env.NODE_ENV === 'production' // for middleware
    ? compose(applyMiddleware(...middlewares)) // 배포용
    : composeWithDevTools(applyMiddleware(...middlewares)) // 개발용
    const store = createStore(reducer, enhancer); 
    return store;
};

const wrapper = createWrapper(configureStore, {
     debug: process.env.NODE_ENV === 'development', });

export default wrapper;
