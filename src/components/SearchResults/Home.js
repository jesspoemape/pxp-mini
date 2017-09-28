import React from 'react';
import styled from 'styled-components';

import Header from './../Header';
import Footer from './../Footer/Home';
import ArticlesContainer from './../ArticlesContainer';
import LoadMoreBar from './../LoadMoreBar';

const Home = () => {
    return (
        <Main>
            <Header button={false} title={'Search Results For:'}/>
            <ArticlesContainer />
            <LoadMoreBar />
            <Footer />
        </Main>
    );
};

export default Home;

const Main = styled.div`

`