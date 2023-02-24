import React from 'react';
import '../../assets/css/index_css.css';
import Foto from '../../assets/img/Plunderer.jpg';
import { NavLink } from 'react-router-dom';
import Footer from '../Organisms/Footer_A';
import Litch from '../../assets/img/LichtBachAnime_2.png';
import CounterH from '../../assets/img/CounterH.png';


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

            <h1 className='nameH'>Synopsis</h1>
            <div className="content">
                <p className="textH">Plunderer tells stories of fantasy, action and hero. The year is 305 of the Archian calendar. Today, 
                the world is ruled by so-called "numbers". In fact, all humans have something called a "count" attached to them. That number 
                is 1 meter in a sense, and it can be anything. Miles traveled, people you know, meals prepared... everything. problem? When that "count", 
                or tally, reaches 0, you are sent to a place called the Abyss. Hina, the main character of the story, lost her mother when her mother's counter 
                reached 0. Her goal now is to fulfill her mother's dying wish of finding the legendary Red Baron.</p>

                <img src={CounterH} className="CounterH" alt="" />
            </div>

        </div>

        <Footer/>
    </div>
    
)

export default MainMenu;