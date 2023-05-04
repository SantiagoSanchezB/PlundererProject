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
    },
    {
        "id":6,
        "nombre": "Schmelman Bach",
        "edad": "300+",
        "count" : "Ilimited",
        "especie" : "Humano",
        "img" : Imagenes.Schmelman,
        "Arma" : "No need for a weapon"
    }
]

const DetallePersonaje = ({match}) =>{
    const personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0]; 
    return (
        <> 
            {
                personaje ? (
                    <div class="Element">
                        <div class="card card">
                            <div class ="imgcontent">
                                <img src={personaje.img} class="card-img-top" alt={personaje.img}/>
                            </div>
                            <div class="card-body">
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
            <div class="vrt">
                <a href={`/Personajes`} class="btn btn-dark">Ver todos</a>
            </div>
        </>
    );
}

export default DetallePersonaje;