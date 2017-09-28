import React from 'react';
import styled from 'styled-components';

const ArticleTile = () => {
    return (
        <Main>
            <Title>Article Title</Title>
            <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.</Blurb>
            <ReadMoreButton>Read More</ReadMoreButton>
        </Main>
    );
};

export default ArticleTile;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 60px;
`
const Title = styled.div`
    text-transform: uppercase;
    color: #995599;
    font-size: 30px;
    font-weight: 100;
    margin-bottom: 25px;
    text-align: left;
`
const Blurb = styled.div`
    text-align: left;
    color: #B0B2B3;
    font-size: 16px;
    line-height: 26px;
    font-weight: 100;
    margin-bottom: 40px;
`
const ReadMoreButton = styled.div`
    width: 75px;
    height: 20px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
    margin-bottom: 15px;
    color: #995599;

    border: 3px solid transparent;
    -moz-border-image: -moz-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    border-image: linear-gradient(to right, #4C1683 0%, #BE10B7 100%);
    border-image-slice: 1;
`