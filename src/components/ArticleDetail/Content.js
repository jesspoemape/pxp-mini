import React from 'react';
import styled from 'styled-components';

import AuthorInfo from './AuthorInfo';
import TextFocus from './TextFocus';

const Content = () => {
    return (
        <Main>
            <AuthorInfo />
            <Blurb>You may be receiving questions from your patients and colleagues about the ZIKA virus
                and the use of ultrasound. To help support you, please find below links to a few
                associations and webinars that provide information and guidance to Healthcare
                Professionals about ZIKA and ultrasound.
            </Blurb>
            <MainText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </MainText>
            <TextFocus />
            <MainText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. 
            </MainText>
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
    font-size: 20px;
    color: #8D438D;
    line-height: 34px;
    font-weight: 100;
    text-align: left;
    margin-bottom: 25px;
`
const MainText = styled.div`
    text-align: left;
    color: #B0B2B3;
    line-height: 27px;
    font-weight: 100;
`