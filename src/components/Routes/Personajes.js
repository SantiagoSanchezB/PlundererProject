import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contenedor from '../Molecules/Contenedor';
import Header from '../Organisms/Header';
import PersonajeDetalle from '../Pages/PersonajeDetalle';
import Footer from '../Organisms/Footer';
import FooterA from '../Organisms/Footer_A';


const PersonajesConst = () => (
  <Router> 
    <Switch>
        <Route path="/Personajes" exact component={ Contenedor }/>
        <Route path="/Personajes/:id" exact component={ PersonajeDetalle }/>
        <Route path="/"/>
        <Route path="/Contacto"/>
        <Route path="/API"/>
        <Route path="/Moments"/>
        <Route component={() =>(
          <h1>Pagina no encontrada</h1>
        )} />
    </Switch>
  </Router>
)

export default PersonajesConst;
