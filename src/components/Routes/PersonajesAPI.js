import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Organisms/Header';
import PersonajesApi from '../Molecules/PersonajesApi';


const PersonajesAPI = () => (
  <Router>
    <Switch>
        <Route path="/PersonajesAPI" exact component={PersonajesApi}/>
    </Switch>
  </Router>
)

export default PersonajesAPI;
