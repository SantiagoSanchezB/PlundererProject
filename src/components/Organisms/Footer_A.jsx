import React from 'react';
import logoGit from'../../assets/img/github.svg';

const Footer_A = () => (
    <div class="footer">
        <footer class="d-flex flex-wrap justify-content-center py-2 border-top">
            <div class="col-md-2 d-flex align-items-center">
                <a href="/" class="mb-1 me-2 mb-md-0 text-muted"/>
                <span class="text-muted">&copy; 2023 Santiago Sanchez</span>
            </div>
            <ul class="nav col-md-1 justify-content-center">
                <li class="ms-3"><a class="text-muted" href="https://github.com/SantiagoSanchezB"><img src={logoGit}/></a></li>
            </ul>
        </footer>
    </div>
);

export default Footer_A;