import React from 'react';
import '../../assets/css/index_css.css';
import Foto from '../../assets/img/Plunderer.jpg';
import { NavLink } from 'react-router-dom';
import Footer from '../Organisms/Footer_A';
import Litch from '../../assets/img/LichtBachAnime_2.png';


const MainMenu = () => (
    <div className="">
        <ul class="index">
            <div className="foto">
                <img src={Foto} className="" alt="Plunderer" />
                <div className="text">
                    <p className="">Welcome to Plunderer WebSite</p>
                    <p className="little-text">A little bit of information about this amazing anime</p>
                    <div className="Litch">
                        <img src={Litch} alt="Litch"/>
                    </div>
                </div>
                
            </div>
            
        </ul>
        <div className="Targets">

            <h1>History</h1>

            

        </div>

        <Footer/>
    </div>
    
)

export default MainMenu;