import React from 'react';
import styled from 'styled-components';

const LinkText = ({text}) => {
    return (
        <Main>{text}</Main>
    );
};

export default LinkText;

const Main = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 100;
    padding: 0px 5px;
 `