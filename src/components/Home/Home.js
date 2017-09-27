import React, { Component } from 'react';

import Header from './../Header';
import ArticlesContainer from './../ArticlesContainer';
import LoadMoreBar from './../LoadMoreBar';
import AboutUsContainer from './AboutUsContainer';
import Footer from './../Footer/Home';

class Home extends Component {
    render() {
        return (
            <div>
                <Header title={'Latest Article Title'} button={true}/>
                <ArticlesContainer />
                <LoadMoreBar />
                <AboutUsContainer />
                <Footer />
            </div>
        );
    }
}

export default Home;