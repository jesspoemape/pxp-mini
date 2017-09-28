import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import {Link} from 'react-router-dom';

import ham from './../assets/ham.svg';

const Hamburger = () => {
    function showMenu() {
        document.getElementById('menu').style.display = 'block';
    }
    return (
        <HamContainer onClick={showMenu}>
            <HamIcon id='hammy' path={ham}/>
            <MenuContent id='menu'>
                <FreshLink to='/'><MenuItem>Home</MenuItem></FreshLink>
                <FreshLink to='/about'><MenuItem>About</MenuItem></FreshLink>
                <FreshLink to='/'><MenuItem>Get Involved</MenuItem></FreshLink>
                <FreshLink to='/'><MenuItem>Contact Us</MenuItem></FreshLink>
            </MenuContent>
        </HamContainer>
    );
};

export default Hamburger;

const HamContainer = styled.div`
    background: #4C1683; 
    background: -webkit-linear-gradient(#4C1683, #6C1476);
    background: -o-linear-gradient(#4C1683, #6C1476); 
    background: -moz-linear-gradient(#4C1683, #6C1476); 
    background: linear-gradient(#4C1683, #6C1476); 
    border: 1px solid #89718E;
    color: white;
    display: none;
    align-items: center;
    font-size: 12px;
    padding: 5px 10px;
    margin: 15px;
    position: relative;


    @media (max-width: 770px) {
        display: flex;
        align-self: flex-end;
    };
`
const HamIcon = styled(ReactSVG)`
    stroke: white;
    fill: white;
    width: 25px;
    display: none;

    @media (max-width: 770px) {
        display: block;
    }
`
const MenuContent = styled.div`
    display: none;
    position: absolute;
    top: 36px;
    right: 0;
    background-color: #f9f9f9;
    width: 360px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`
const MenuItem = styled.a`
    color: #4C1683;
    padding: 16px 16px;
    text-decoration: none;
    display: block;
    font-size: 18px;
    text-align: center;
    border-bottom: 1px solid lightgray;

    :hover {background-color: #f1f1f1};
`
const FreshLink = styled(Link)`
    text-decoration: none;
`