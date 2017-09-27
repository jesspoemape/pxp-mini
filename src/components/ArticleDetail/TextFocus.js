import React from 'react';
import styled from 'styled-components';

import filler3 from './../../assets/filler3.jpg';

const TextFocus = () => {
    return (
        <Main>
            <Media />
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
        </Main>
    );
};

export default TextFocus;

const Main = styled.div`
    display: flex;
    align-items: center;
    padding: 22px 0;
`
const Media = styled.div`
    background: url('${filler3}');
    height: 155px;
    width: 900px;
    background-size: cover;
    margin-right: 23px;
`
const Text = styled.div`
    font-size: 24px;
    text-align: left;
    color: #7D277D;
    line-height: 32px;
`