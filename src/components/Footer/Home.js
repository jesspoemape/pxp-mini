import React from 'react';
import styled from 'styled-components';

import SocialContainer from './SocialContainer';
import LinksContainer from './LinksContainer';

const Home = () => {
    return (
        <Main>
            <Secondary>
                <LogoContainer>Logo Goes Here</LogoContainer>
                <SocialContainer />
            </Secondary>
            <Disclaimer>
                GE (NYSE: GE) imagines things other don’t, builds things others can’t, and delivers outcomes that make the 
                world work better. GE brings together the physical and digital worlds in ways no other company
                can. In its labs and factories and on the ground with customers, GE is inventing the next industrial era to move, 
                power, build and cure the world. www.ge.com
            </Disclaimer>
            <LinksContainer />
        </Main>
    );
};

export default Home;

const Main = styled.div`
    background: #555555;
    height: 230px;
    display: flex;
    flex-direction: column;
    padding: 60px 150px 0 150px;
    position: relative;
    bottom: 0;

    @media (max-width: 1000px) {
       padding: 40px 75px 0 75px;
    }
    @media (max-width: 900px) {
       padding: 40px 50px 0 50px;
    }
    @media (max-width: 575px) {
       padding-bottom: 40px;
    }
`
 const Disclaimer = styled.div`
    font-size: 10px;
    color: white;
    text-align-center;
    font-weight: 100;
    margin-bottom: 27px;
 `
 const LogoContainer = styled.div`
    color: #8E9193;
    display: flex;
    justify-content: flex-start;
    width: 170px;

    @media (max-width: 800px) {
       justify-content: center;
       width: 100%;
    };
    
 `
 const Secondary = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 575px) {
       flex-direction: column;
       align-items: center;
    };
 `
