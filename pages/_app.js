// 페이지들의 공통되는 것들 처리
// 만약 헤드태그를 수정하고 싶다면 
import Head from 'next/head';

import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);