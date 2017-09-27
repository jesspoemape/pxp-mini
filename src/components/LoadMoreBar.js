import React from 'react';
import styled from 'styled-components';

const LoadMoreBar = () => {
    return (
        <Main>
            <IconContainer>+</IconContainer>
            <Text>Load More</Text>
        </Main>
    );
};

export default LoadMoreBar;

const Main = styled.div`
    background: #711371;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 40px 45px;
`
const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
    color: #711371;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.div`
    text-transform: uppercase;
    color: white;
    font-size: 8.5px;
    padding-left: 10px;
    font-weight: 100;
`