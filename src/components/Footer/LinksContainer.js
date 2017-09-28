import React from 'react';
import styled from 'styled-components';

import LinkText from './LinkText';

const LinksContainer = () => {
    return (
        <Main>
            <LinkText text={'Privacy'} />
             <LinkText text={'Cookie Policy'}/>
             <LinkText text={'Terms and Conditions'}/>
            <LinkText text={'GE Healthcare Website'}/>
            <LinkText text={'© 2017 General Electric Company'}/>
        </Main>
    );
};

export default LinksContainer;
const Main = styled.div`
    display: flex;
    justify-content: center;

    >div {
        border-right: 1px solid white;
    };

    :nth-child(5) {
        border-right: none;
    };

    @media (max-width: 800px) {
       flex-wrap: wrap;
       align-self: center;
       max-width: 600px;
    };
`