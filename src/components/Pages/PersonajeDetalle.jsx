import React from 'react';
import '../../assets/css/index_css.css';
import Footer from '../Organisms/Footer';
import Imagenes from '../Molecules/Imagenes';

const personajes = [
    {
        "id":1,
        "nombre": "Licht Bach",
        "edad": 300,
        "count" : "10,000,000",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Licht,
        "Arma" : "Longs Sword"
    },
    {
        "id":2,
        "nombre": "Hina",
        "edad": 23,
        "count" : "763",
        "especie" : "Humano",
        "img" : Imagenes.Hina,
        "Arma" : "None"
    },
    {
        "id":3,
        "nombre": "Nana Bassler",
        "edad": 300,
        "count" : "1",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Nana,
        "Arma" : "Longs Sword"
    },
    {
        "id":4,
        "nombre": "Sakai Tokikaze",
        "edad": 300,
        "count" : "5,246,639",
        "especie" : "763",
        "img" : Imagenes.Saika,
        "Arma" : "Longs Sword"
    },
    {
        "id":5,
        "nombre": "Sonohara Mizuka",
        "edad": 300,
        "count" : "32000",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Sonohara,
        "Arma" : "Longs Sword"
    },
    {
        "id":6,
        "nombre": "Pele Poporo",
        "edad": 300,
        "count" : "120",
        "especie" : "Humano Modificado",
        "img" : Imagenes.Gespen,
        "Arma" : "Glock 17"
    }
]

const DetallePersonaje = ({match}) =>{
    const personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0]; 
    return (
        <> 
            {
                personaje ? (
                    <div class="Element" >  
                        <div className="card">
                            <div class="card-body">
                                <img class="aling pos img-fluid rounded-circle" src={personaje.img}/>
                                <h5 class="card-title">{personaje.nombre}</h5>
                                <p class="card-text">Edad: {personaje.edad}</p>
                                <p class="card-text">Count: {personaje.count}</p>
                                <p class="card-text">Especie: {personaje.especie}</p>
                                <p class="card-text">Arma: {personaje.Arma}</p>
                            </div>
                        </div>
                    </div>
                ):
                <h1>El id del personaje no existe</h1>
            }
            <div class="Element">
                <a href={`/Personajes`} class="btn btn-dark">Ver todos</a>
            </div>
            <Footer/>
        </>
    );
}

export default DetallePersonaje;