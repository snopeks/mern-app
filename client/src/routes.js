import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './Layout';
import Clock from './Clock';


var routes = (
  <div>
    <Route path = '/' component={Layout}>
      <IndexRoute component={Clock}/>
    </Route>
    <Route path="/clock" component={Clock}/>
  </div>
)

export default routes;