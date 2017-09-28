import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import facebook from './../../assets/facebook.svg';
import linkedin from './../../assets/linkedin.svg';
import twitter from './../../assets/twitter.svg';
import email from './../../assets/email.svg';
import plus from './../../assets/plus.svg';


const SocialFooter = () => {
    return (
        <Main>
            <Facebook>
                <Icon path={facebook} />
                <Text>Facebook</Text>
            </Facebook>
            <LinkedIn>
                <Icon path={linkedin} />
                <Text>LinkedIn</Text>
            </LinkedIn>
            <Twitter>
                <Icon path={twitter} />
                <Text>Twitter</Text>
            </Twitter>
            <Email>
                <Icon path={email} />
                <Text>Email</Text>
            </Email>
            <More>
                <Icon path={plus} />
                <Text>More</Text>
            </More>
        </Main>
    );
};

export default SocialFooter;

const Main = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    margin-right: 25%;

    @media (max-width: 770px) {
        margin-right: 30px;
    }
`
const Text = styled.div`
    color: white;
    font-size: 8px;
    margin-left: 5px;
`
const Icon = styled(ReactSVG)`
    fill: white;
    stroke: white;
    width: 10px;
`
const SocialButton = styled.div`
    display: flex;
    width: 50px;
    justify-content: center;
    align-items: center;
    height: 15px;
    padding: 5px;
    margin-right: 13px;
`
const Facebook = styled(SocialButton)`
    background-color: #4D6FA7;
`
const LinkedIn = styled(SocialButton)`
    background-color: #068CC0;
`
const Twitter = styled(SocialButton)`
    background-color: #2FB3F2;
`
const Email = styled(SocialButton)`
    background-color: #969696;
`
const More = styled(SocialButton)`
    background-color: #FF7C67;
`

