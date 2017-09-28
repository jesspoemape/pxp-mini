import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import {Link} from 'react-router-dom';

import search from './../assets/search.svg';

class SearchBar extends Component {

    constructor() {
        super();

        this.state={
            userInput: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

handleChange(e) {
    this.setState({userInput: e.target.value});
}
handleSearch() {
    console.log(this.state.userInput);
}
    render() {
        return (
                <Main>
                    <Input value={this.state.userInput} onChange={e => this.handleChange(e)}/>
                    <FreshLink to='/search'>
                        <SearchButton onClick={this.handleSearch}>
                            <Icon path={search}/>
                        </SearchButton>
                    </FreshLink>
                </Main>
        );
    }
}

export default SearchBar;

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    width: 125px;
    border-radius: 12px;
    height: 16px;
    border: 1px solid gray;
    margin-left: 3px;
    padding-left: 10px;
    &:focus {
        outline: none;
    }
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
const FreshLink = styled(Link)`
    text-decoration: none;
`