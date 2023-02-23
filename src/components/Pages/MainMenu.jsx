import React from 'react';
import '../../assets/css/index_css.css';
import Foto from '../../assets/img/Plunderer.jpg';
import { NavLink } from 'react-router-dom';


const MainMenu = () => (
    <ul class="index">
        <div className="foto">
            <img src={Foto} className="" alt="" />
        </div>



    </ul>
)

export default MainMenu;