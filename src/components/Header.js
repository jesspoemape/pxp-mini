import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import women from './../assets/three-women.jpg';
import search from './../assets/search.svg';
import ham from './../assets/ham.svg';

const Header = ({title, button, left}) => {
    return (
        <MainContainer>
            <MenuContainer>
                <HamContainer>
                    <HamIcon path={ham} />
                </HamContainer>
                <RightInnerContainer>
                    <MenuOption>Home Page</MenuOption>
                    <MenuOption>About</MenuOption>
                </RightInnerContainer>
                <LeftInnerContainer>
                    <LeftMenuOption>Get Involved</LeftMenuOption>
                    <LeftMenuOption>Contact Us</LeftMenuOption>
                    <SearchBar />
                    <SearchButton>
                        <Icon path={search}/>
                    </SearchButton>
                </LeftInnerContainer>
            </MenuContainer>
            <Title left={left}>{title}</Title>
            {button? <ReadMoreButton>Read More</ReadMoreButton> : null}
        </MainContainer>
    );
};

export default Header;

const MainContainer = styled.div`
    height: 490px;
    width: 100%;
    background-image: url('${women}');
    background-size: cover;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    text-transform: uppercase;
    color: white;
    font-size: ${props => props.left ? '75px' : '55px'};
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
   -webkit-text-stroke-width: 2px;
   -webkit-text-stroke-color: #501891;
   padding: ${props => props.left ? '270px 0 0 60px' : '200px 0 40px 0'};
   text-align: ${props => props.left ? 'left' : 'center'};


   @media (max-width: 770px) {
        padding: ${props => props.left ? '160px 0 0 0' : '100px 40px 40px 40px'};
        text-align: center;
        font-size: 65px;
  }
  @media (max-width: 550px) {
        padding-top: 75px;
  }
`

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 770px) {
        justify-content: flex-end;
  }
`
const RightInnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;

    @media (max-width: 770px) {
        display: none;
  }
`
const LeftInnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;

    @media (max-width: 770px) {
        display: none;
  }
`
const MenuOption = styled.div`
    background: #4C1683; 
    background: -webkit-linear-gradient(#4C1683, #6C1476);
    background: -o-linear-gradient(#4C1683, #6C1476); 
    background: -moz-linear-gradient(#4C1683, #6C1476); 
    background: linear-gradient(#4C1683, #6C1476); 
    border: 1px solid #89718E;
    color: white;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 5px 10px;
    margin-right: 45px;
`

const LeftMenuOption = styled(MenuOption)`
    text-transform: uppercase;
    margin-left: 3px;
    margin-right: 3px;
`
const SearchBar = styled.input`
    width: 125px;
    border-radius: 12px;
    height: 16px;
    border: 1px solid gray;
    margin-left: 3px;
`
const SearchButton = styled.div`
    border-radius: 50%;
    background: #4C1683; 
    background: -webkit-linear-gradient(left, #4C1683, #A510AF);
    background: -o-linear-gradient(left, #4C1683, #A510AF); 
    background: -moz-linear-gradient(left, #4C1683, #A510AF); 
    background: linear-gradient(left, #4C1683, #A510AF); 
    height: 30px;
    width: 30px;
    position: relative;
    right: 15px;
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`
const Icon = styled(ReactSVG)`
    stroke: white;
    fill: white;
    width: 14px;
`

const ReadMoreButton = styled.div`
    width: 150px;
    height: 30px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    border: 5px solid transparent;
    -moz-border-image: -moz-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
    border-image: linear-gradient(to right, #4C1683 0%, #BE10B7 100%);
    border-image-slice: 1;

    @media (max-width: 770px) {
        width: 250px;
        height: 50px;
        font-size: 24px;
        border: 7px solid transparent;
        -moz-border-image: -moz-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
        -webkit-border-image: -webkit-linear-gradient(left, #4C1683 0%, #BE10B7 100%);
        border-image: linear-gradient(to right, #4C1683 0%, #BE10B7 100%);
        border-image-slice: 1;
    }
`
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

    @media (max-width: 770px) {
        display: flex;
        align-self: flex-end;
    }
`
const HamIcon = styled(Icon)`
    width: 25px;
    display: none;

    @media (max-width: 770px) {
        display: block;
    }
`

