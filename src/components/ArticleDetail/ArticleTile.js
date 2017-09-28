import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import filler1 from './../../assets/filler1.jpg';

const ArticleTile = () => {
    return (
        <Main>
            <Filter />
            <Title>Article Title</Title>
            <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.</Blurb>
           <FreshLink to='/article'><ReadMoreButton>Read More</ReadMoreButton></FreshLink>
        </Main>
    );
};

export default ArticleTile;

const Main = styled.div`
    display: flex;
    position relative;
    flex-direction: column;
    padding: 40px 60px;
    background: url('${filler1}');
    background-size: cover;
    width: 33%;

    @media (max-width: 770px) {
        width: 100%;
    }
`
const Filter = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    position: absolute;
    background-color: white;
    opacity: 0.8;
    filter: alpha(opacity=80);
`
const Title = styled.div`
    text-transform: uppercase;
    color: #7A237A;
    font-size: 30px;
    font-weight: 100;
    margin-bottom: 25px;
    text-align: left;
    z-index: 1;
`
const Blurb = styled.div`
    text-align: left;
    color: #B3B3B3;
    font-size: 16px;
    line-height: 26px;
    font-weight: 100;
    margin-bottom: 40px;
    z-index: 1;
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
    z-index: 1;

    border: 3px solid transparent;
    -moz-border-image: -moz-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    border-image: linear-gradient(to right, #4C1683 0%, #BE10B7 100%);
    border-image-slice: 1;

    @media (max-width: 770px) {
        width: 100px;
        height: 30px;
        font-size: 12px;
    }
`
const FreshLink = styled(Link)`
    text-decoration: none;
    z-index: 1;
`