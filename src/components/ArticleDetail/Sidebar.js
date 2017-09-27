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