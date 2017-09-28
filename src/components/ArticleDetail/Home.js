import React from 'react';
import styled from 'styled-components';

import Header from './../Header';
import Footer from './../Footer/Home';
import Content from './Content';
import Sidebar from './Sidebar';
import SocialFooter from './SocialFooter';
import ArticlesContainer from './ArticlesContainer';

const ArticleDetail = () => {
    return (
        <Main>
            <Header title={'Article Title'} left={true}/>
            <ContentContainer>
                <Content />
                <Sidebar />
            </ContentContainer>
            <SocialFooter />
            <ArticlesContainer/>
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