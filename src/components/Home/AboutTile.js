import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

const AboutTile = ({text, icon, subtext}) => {

    let parsedText = parseSubtext(subtext);
    function parseSubtext(text) {
        let splitStr = '';
        if (text && text.includes(',')) {
            splitStr = text.split(",");
        }
        else if (text) {
            splitStr = text.split('   ');
        }
            return splitStr;
    }
    return (
        <Main>
            <Icon path={icon}></Icon>
            <Text>{text}</Text>
            <SubTextContainer>
                <ul>
                    { parsedText ? 
                        parsedText.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })
                        :
                        null
                    }
                </ul>
            </SubTextContainer>
        </Main>
    );
};

export default AboutTile;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    padding: 0 70px;
    :nth-child(2) {
        border-left: 1px solid #E5E5E5;
        border-right: 1px solid #E5E5E5;
    }

    @media (max-width: 575px) {
       width: 100%;
       margin: 40px 0px;
       border: none;
       padding: 0px;

       :nth-child(2) {
           border-bottom: 1px solid #E5E5E5;
           border-top: 1px solid #E5E5E5;
           margin: 0;
           padding: 40px 0px;
       }
    }
`

const Text = styled.div`
    text-transform: uppercase;
    font-size: 24px;
    color: #7E2A7E;
    padding-bottom: 15px;

    @media (max-width: 770px) {
       font-size: 19px;
    }
    @media (max-width: 575px) {
       font-size: 22px;
    }
`
const Icon = styled(ReactSVG)`
    height: 100px;
    padding-bottom: 15px;

    @media (max-width: 770px) {
       height: 75px;
    }
    @media (max-width: 575px) {
       height: 100px;
    }
`
const SubTextContainer = styled.div`
    color: #A9ABAD;
    font-weight: 100;
    line-height: 26px;

    @media (max-width: 770px) {
       font-size: 14px;
    }
    @media (max-width: 575px) {
       font-size: 16px;
    }
`