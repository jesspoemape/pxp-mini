import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import ArticleDetail from './components/ArticleDetail/Home';
import SearchResults from './components/SearchResults/Home';
import About from './components/About/Home';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/article' component={ArticleDetail}/>
        <Route path='/search' component={SearchResults}/>
        <Route path='/about' component={About}/>
    </Switch>
);