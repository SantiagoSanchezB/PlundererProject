import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contenedor from '../Molecules/Contenedor';
import Header from '../Organisms/Header';
import PersonajeDetalle from '../Pages/PersonajeDetalle';
import MainMenu from '../Pages/MainMenu';
import Contacto from '../Molecules/Contacto';
import DatosApi from '../Molecules/DatosApi';

const App = () => (
  <Router> 
    <Header/>
    <Switch>
        <Route path="/" exact component={MainMenu}/>
        <Route path="/Personajes" exact component={ Contenedor }/>
        <Route path="/Personajes/:id" exact component={ PersonajeDetalle }/>
        <Route path="/Contacto" exact component={ Contacto }/>
        <Route path="/API" exact component={DatosApi}/>
        <Route component={() =>(
          <h1>Pagina no encontrada</h1>
        )} />
    </Switch>
  </Router>
)

export default App;
