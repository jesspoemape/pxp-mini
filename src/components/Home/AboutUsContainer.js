import React from 'react';
import styled from 'styled-components';

import AboutTile from './AboutTile';
import info from './../../assets/info.svg';
import globe from './../../assets/globe.svg';
import link from './../../assets/link.svg';



const AboutUsContainer = () => {

    return (
        <MainContainer>
            <AboutTile text={'about us'} icon={info} subtext={' '}/>
            <AboutTile text={'related links'} icon={link} subtext={`GE Healthcare Ultrasound, Voluson Innovations, Voluson Club benefits`}/>
            <AboutTile text={'more'} icon={globe} subtext={`Women's Health`}/>
        </MainContainer>
    );
};

export default AboutUsContainer;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;

    @media (max-width: 575px) {
        flex-direction: column;
    }
`