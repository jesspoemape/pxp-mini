import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import ArticleDetail from './components/ArticleDetail/Home';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/article' component={ArticleDetail}/>
    </Switch>
);