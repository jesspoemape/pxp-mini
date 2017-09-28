import React from 'react';
import styled from 'styled-components';

import SidebarTile from './SidebarTile';

const Sidebar = () => {
    return (
        <Main>
            <Header>Recent Articles</Header>
            <SidebarTile />
            <SidebarTile />
            <SidebarTile />
            <GetInvolved>Get Involved</GetInvolved>
        </Main>
    );
};

export default Sidebar;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 30px;
    margin-top: 15px;
    border-left: 1px solid #E5E5E5;
    
    @media (max-width: 770px) {
        display: none;
    }
`
const Header = styled.div`
    text-transform: uppercase;
    font-size: 20px;
    color: #995599;
    font-weight: 100;
    padding-bottom: 45px;
    margin-bottom: 45px;
    border-bottom: 1px solid #E5E5E5;
`
const GetInvolved = styled.div`
    margin-top: 45px;
    width: 90px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start; 
    color: white;
    text-transform: uppercase;
    font-size: 8px;
    padding: 5px;
    background: #4C1683; 
    background: -webkit-linear-gradient(#4C1683, #6C1476);
    background: -o-linear-gradient(#4C1683, #6C1476); 
    background: -moz-linear-gradient(#4C1683, #6C1476); 
    background: linear-gradient(#4C1683, #6C1476); 
`