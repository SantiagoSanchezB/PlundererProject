import React from 'react';
import '../../assets/css/index_css.css';

const Header = () => (
    <div className = "">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Plunderer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Personajes">Personajes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Contacto">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/API">API-Plunderer</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <h1 class="Name">Plunderer</h1>
    </div>
);

export default Header;