import React from 'react';
import styled from 'styled-components';

import Header from './../Header';
import Footer from './../Footer/Home';
import Content from './Content';
import Sidebar from './Sidebar';
import SocialFooter from './SocialFooter';

const ArticleDetail = () => {
    return (
        <Main>
            <Header title={'Article Title'}/>
            <ContentContainer>
                <Content />
                <Sidebar />
            </ContentContainer>
            <SocialFooter />
            <Footer />
        </Main>
    );
};

export default ArticleDetail;

const Main = styled.div`

`
const ContentContainer = styled.div`
    display: flex;
    padding: 22px 40px;
`