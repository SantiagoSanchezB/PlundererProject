import React from 'react';
import logoGit from'../../assets/img/github.svg';

const Footer_A = () => (
    <footer class="footer d-flex flex-wrap justify-content-center py-2 border-top">
    <div class="col-md-2 d-flex align-items-center">
        <span class="text-muted">&copy; 2023 Santiago Sanchez</span>
    </div>
    <ul class="nav col-md-1 justify-content-center">
        <li class="ms-3"><a class="text-muted" href="https://github.com/SantiagoSanchezB"><img src={logoGit} alt='logoGit'/></a></li>
    </ul>
</footer>

);

export default Footer_A;