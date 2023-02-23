import React from 'react';
import '../../assets/css/index_css.css';
import Logo from '../../assets/img/Plunderer_Logo.png';

const Header = () => (
    <div className = "">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src={Logo} class= "Logo"alt="" />
                <a class="navbar-brand" href="/">Plunderer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Index</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Personajes">Characters</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Contacto">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Header;