import React from 'react';
import styled from 'styled-components';

import filler1 from './../../assets/filler1.jpg';

const ArticleTileV1 = () => {
    return (
        <MainContainer>
            <InfoContainer>
                <Title>Article Title</Title>
                <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Blurb>
                <ReadMoreButton>Read More</ReadMoreButton>
            </InfoContainer>
            <Image />
        </MainContainer>
    );
};

export default ArticleTileV1;

const MainContainer = styled.div`
    display: flex;
    width: 50%;

     @media (max-width: 770px) {
       width: 100%;
    }
`
const InfoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 70px 0px 20px 0px;

`

const Title = styled.div`
    text-transform: uppercase;
    color: #721572;
    font-size: 32px;
    font-weight: 100;
    padding: 0 20px 25px 40px;
    
    @media (max-width: 1150px) {
       padding: 0 8px 25px 30px;
    }
    @media (max-width: 1100px) {
       padding: 0 0px 25px 30px;
    }
    @media (max-width: 1000px) {
       font-size: 24px;
    }
`
const Blurb = styled.div`
    color: #9C9EA0;
    font-size: 16px;
    line-height: 26px;
    text-align: left;
    padding: 0 15px 30px 40px;

    @media (max-width: 1150px) {
       padding: 0 20px 25px 30px;
    }
`

const ReadMoreButton = styled.div`
    width: 84px;
    height: 16px;
    text-transform: uppercase;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-bottom: 40px;
    // margin-left: 40px;
    margin: 0 20px 40px 40px;

    border: 4px solid transparent;
    -moz-border-image: -moz-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    border-image: linear-gradient(to right, #4C1683 0%, #BE10B7 100%);
    border-image-slice: 1;

    @media (max-width: 1150px) {
       margin: 0 20px 25px 30px;
    }
    
    @media (max-width: 770px) {
        width: 115px;
        height: 30px;
        font-size: 16px;
    }
`
const Image = styled.div`
    background: url('${filler1}');
    background-size: cover;
    width: 50%;
`
