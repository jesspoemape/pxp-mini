import React from 'react';
import styled from 'styled-components';

import AuthorInfo from './AuthorInfo';

const Content = () => {
    return (
        <Main>
            <AuthorInfo />
            <Blurb>You may be receiving questions from your patients and colleagues about the ZIKA virus
                and the use of ultrasound. To help support you, please find below links to a few
                associations and webinars that provide information and guidance to Healthcare
                Professionals about ZIKA and ultrasound.
            </Blurb>
        </Main>
    );
};

export default Content;

const Main = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    padding-right: 45px;
    
`

const Blurb = styled.div`
    font-size: 18px;
    color: #8D438D;
    line-height: 34px;
    font-weight: 100;
    text-align: left;
`