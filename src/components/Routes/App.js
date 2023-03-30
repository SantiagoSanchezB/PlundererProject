import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Organisms/Header';
import MainMenu from '../Pages/MainMenu';
import Contacto from '../Molecules/Contacto';
import DatosApi from '../Molecules/DatosApi';
import Moments from '../Pages/Moments';


const App = () => (
  <Router> 
    <Header/>
    <Switch>
        <Route path="/" exact component={MainMenu}/>
        <Route path="/Contacto" exact component={ Contacto }/>
        <Route path="/API" exact component={DatosApi}/>
        <Route path="/Moments" exact component={Moments}/>
    </Switch>
  </Router>
)

export default App;
