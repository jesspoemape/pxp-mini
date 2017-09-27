import React from 'react';
import styled from 'styled-components';

import Social from './Social';

import insta from './../../assets/insta.svg';
import yt from './../../assets/yt.svg';
import facebook from './../../assets/facebook.svg';
import snap from './../../assets/snapchat.svg';
import twit from './../../assets/twitter.svg';
import linkedin from './../../assets/linkedin.svg';


const SocialContainer = () => {
    return (
        <Main>
            <Social path={facebook}/>
            <Social path={insta}/>
            <Social path={linkedin}/>
            <Social path={snap}/>
            <Social path={twit}/>
            <Social path={yt}/>
        </Main>
    );
};

export default SocialContainer;

const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 35px;

    @media (max-width: 575px) {
       justify-content: center;
       margin-top: 25px;
    };
`