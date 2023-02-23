import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/index_css.css';
import { Link } from 'react-router-dom';

const Personajes = ({nombre, edad, count, especie,img,id}) => (
    <div className="">
        <div class="Element"> 
            
            <div className="card">
                <div class="card-body">

                    <div class="aling pos img-fluid">
                        <img src={img} class="rounded-circle"/>
                    </div>
                    <h5 class="card-title">{nombre}</h5>
                    <p class="card-text">Edad: {edad}</p>
                    <p class="card-text">Count: {count}</p>
                    <p class="card-text">Especie: {especie}</p>
                    <p><Link to={`/Personajes/${id}`} class="btn btn-outline-secondary">Detalle</Link></p>
                </div>
            </div> 
        </div>
    </div>

);

Personajes.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Personajes.defaultProps = {
    nombre :"No se encuentra Nombre",
    edad : "No se encuentra Edad",
    genero: "No se encuentra Genero"
}

export default Personajes;
