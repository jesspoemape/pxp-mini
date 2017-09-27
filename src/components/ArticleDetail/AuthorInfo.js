import React from 'react';
import styled from 'styled-components';

import profile from './../../assets/profile.jpg';

const AuthorInfo = () => {
    return (
        <Main>
            <ProfileImage />
            <Author>Author Name</Author>
            <Date>Date Posted</Date>
        </Main>
    );
};

export default AuthorInfo;

const Main = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 18px;
`
const ProfileImage = styled.div`
    border-radius: 50%;
    height: 65px;
    width: 65px;
    background: url('${profile}');
    background-size: cover;
    background-color: black;
    margin-right: 15px;
`
const Author = styled.div`
    font-size: 16px;
    color: #8D438D;
    border-right: 1px solid #8D438D;
    margin-right: 5px;
    padding-right: 5px;
`
const Date = styled.div`
    font-size: 16px;
    color: #8D438D;
`

