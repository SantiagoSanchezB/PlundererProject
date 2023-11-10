import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonajeDetalle from '../Pages/PersonajeDetalle';
import Personajes from '../Pages/Personajes';



const PersonajesConst = () => (
  <Router> 
    <Switch>
        <Route path="/Personajes/:id" exact component={ PersonajeDetalle }/>
        <Route path="/"/>
        <Route path="/Contacto"/>
        <Route path="/Moments"/>
        <Route component={() =>(
          <h1>Pagina no encontrada</h1>
        )} />
    </Switch>
  </Router>
)

export default PersonajesConst;
