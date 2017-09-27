import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

const Social = ({path}) => {
    return (
        <Main>
            <Icon path={path}/>
        </Main>
    );
};

export default Social;

const Main = styled.div`
    border-radius: 50%;
    height: 33px;
    width: 33px;
    border: 1px solid white;
    background-color: #555555;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
`
const Icon = styled(ReactSVG)`
    fill: white;
    stroke: white;
    width: 18px;
`