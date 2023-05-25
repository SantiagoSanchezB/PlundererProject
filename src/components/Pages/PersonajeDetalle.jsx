import React from 'react';
import '../../assets/css/index_css.css';
import Footer from '../Organisms/Footer';
import Imagenes from '../Molecules/Imagenes';

const personajes = [
    {"id":1,"nombre": "Licht Bach","edad": 300,"count" : "50,000,000","especie" : "Humano Modificado(ACE)","img" : "https://i.imgur.com/WprmPhR.png","Arma" : "Longs Sword"},
    {"id":2,"nombre": "Hina","edad": 23,"count" : "763","especie" : "Humano","img" : "https://i.imgur.com/W669yI5.png","Arma" : "None"},
    {"id":3,"nombre": "Nana Bassler","edad": 300,"count" : "1","especie" : "Humano Modificado(ACE)","img" : "https://i.imgur.com/zXQNotl.png","Arma" : "None"},
    {"id":4,"nombre": "Sakai Tokikaze","edad": 300,"count" : "5,246,639","especie" : "Humano Modificado(ACE)","img" : "https://i.imgur.com/qYWv9ZV.png","Arma" : "Longs Sword"},
    {"id":5,"nombre": "Sonohara Mizuka","edad": 300,"count" : "32000","especie" : "Humano Modificado(ACE)","img" : "https://i.imgur.com/F1fYyUB.png","Arma" : "Fire Guns"},
    {"id":6,"nombre": "Pele Poporo","edad": 300,"count" : "120","especie" : "Humano","img" : "https://i.imgur.com/fCV8G8b.png","Arma" : "Glock 17"},
    {"id":7,"nombre": "Sakai Tokikaze","edad": 300,"count" : "507,025","especie" : "Humano Modificado(ACE)","img" : "https://i.imgur.com/KMY1TEt.png","Arma" : "Short Sword"},
    {"id":8,"nombre": "Schmelman Bach","edad": 320,"count" : "0, Its a Original Ballot Holder","especie" : "Humano","img" : "https://i.imgur.com/T0ZeoBx.png","Arma" : "Its born power"},
    {"id":9,"nombre": "Jail murdoch","edad": 39,"count" : "325000","especie" : "Humano","img" : "https://i.imgur.com/TJgp3aQ.png","Arma" : "Yours Creations for ballot holder"},
    {"id":10,"nombre": "Taketora Doan","edad": 300,"count" : "122546","especie" : "Humano Modificado","img" : "https://i.imgur.com/jYqZHb3.png","Arma" : "Orb of gravity"},
    {"id":11,"nombre": "Tsukina Farrow","edad": 100,"count" : "None","especie" : "Humano","img" : "https://i.imgur.com/52YeGgQ.png","Arma" : "none"}
]

const DetallePersonaje = ({match}) =>{
    const personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0]; 
    return (
        <> 
            {
                personaje ? (
                    <div class="Detalle">
                        <div class="card-detalle card">
                            <div class ="imgcontentA">
                                <img src={personaje.img} class="card-img-top" alt={personaje.img}/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{personaje.nombre}</h5>
                                <p class="card-text">Edad: {personaje.edad}</p>
                                <p class="card-text">Count: {personaje.count}</p>
                                <p class="card-text">Especie: {personaje.especie}</p>
                                <p class="card-text">Arma: {personaje.Arma}</p>
                                <br/>
                                <div class="vrt">
                                    <a href={`/PersonajesAPI`} class="btn btn-dark">Ver todos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ):
                <h1>El id del personaje no existe</h1>
            }
        </>
    );
}

export default DetallePersonaje;