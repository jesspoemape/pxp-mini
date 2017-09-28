import React from 'react';
import styled from 'styled-components';

import filler2 from './../../assets/filler2.jpg';

const SidebarTile = () => {
    return (
        <Main>
            <Image />
            <Title>Article Title</Title>
            <Blurb>You may be receiving questions from your patients and colleagues</Blurb>
            <ReadMoreButton>Read More</ReadMoreButton>
        </Main>
    );
};

export default SidebarTile;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-start;
`
const Image = styled.div`
    background: url('${filler2}');
    background-size: cover;
    height: 100px;
    width: 100%;
`
const Title = styled.div`
    text-transform: uppercase;
    color: #995599;
    font-size: 16px;
    padding: 5px 0;
`

const Blurb = styled.div`
    color: #B0B2B3;
    font-size: 10px;
    display: flex;
    text-align: left;
    padding-bottom: 15px;
`
const ReadMoreButton = styled.div`
    width: 50px;
    height: 12px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7px;
    margin-bottom: 15px;
    color: #995599;

    border: 3px solid transparent;
    -moz-border-image: -moz-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    border-image: linear-gradient(to right, #4C1683 0%, #BE10B7 100%);
    border-image-slice: 1;
`