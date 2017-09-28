import React from 'react';
import styled from 'styled-components';

import ArticleTile from './ArticleTile';

const ArticlesContainer = () => {
    return (
        <MainContainer>
            <ArticleTile />
            <ArticleTile />
            <ArticleTile />
        </MainContainer>
    );
};

export default ArticlesContainer;

const MainContainer = styled.div`
    display: flex;
`