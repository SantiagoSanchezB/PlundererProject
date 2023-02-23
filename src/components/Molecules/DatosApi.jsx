import React from 'react';
import { Component } from 'react';
import '../../assets/css/index_css.css';
import Footer_A from '../Organisms/Footer_A';
import axios from 'axios';

class DatosApi  extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/SantiagoSanchezB/DataJs-Plundere/Personajes')
        .then(resp =>{
            this.setState({
                posts: resp.data
            })
        })
    }

    render(){
        const {posts} = this .state;
        return(
            <>
                <div>
                    {
                        posts.map( u => (
                            <>
                                <div class="Element">
                                    <div className="card">
                                        <div class="card-body">
                                            <div class="aling pos img-fluid">
                                                <img src={u.img} class="rounded-circle"/>
                                            </div>
                                            <h5 class="card-title"><b>Nombre:</b> {u.nombre}</h5>
                                            <p><b>Edad:</b> {u.edad}</p>
                                            <p><b>Count:</b> {u.count}</p>
                                            <p><b>Especie:</b> {u.especie}</p>
                                            <p><b>Arma:</b> {u.Arma}</p>
                                        </div>
                                    </div>
                                </div> 
                            </>
                        ))
                    }
                </div>
                <Footer_A class="footer"/>
            </>
        )
    }
}

export default DatosApi;