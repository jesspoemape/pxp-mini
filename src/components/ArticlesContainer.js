import React from 'react';
import styled from 'styled-components';

import ArticleTileV1 from './Home/ArticleTileV1';
import ArticleTileV2 from './Home/ArticleTileV2';


const ArticlesContainer = () => {
    return (
        <MainContainer>
             <ArticleTileV1 />
            <ArticleTileV1 />
            <ArticleTileV2 />
            <ArticleTileV2 />
        </MainContainer>
    );
};

export default ArticlesContainer;

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

`


