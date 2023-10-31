import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonajesApi from '../Molecules/PersonajesApi';
import CrearPersonaje from '../Molecules/CreatePersonaje';


const PersonajesAPI = () => (
  <Router>
    <Switch>
        <Route path="/PersonajesAPI" exact component={PersonajesApi}/>
        <Route path="/RegistrarPersonaje" exact component={CrearPersonaje}/>
    </Switch>
  </Router>
)

export default PersonajesAPI;
