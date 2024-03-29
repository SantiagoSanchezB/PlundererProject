import React from 'react';
import { Component } from 'react';
import '../../assets/css/index_css.css';
import axios from 'axios';

class PersonajesApi   extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/SantiagoSanchezB/json-plunderer/Personajes')
        .then(resp =>{
            this.setState({
                posts: resp.data
            })
        })
    }

    render(){
        const {posts} = this.state;
        return(
            <>
                <div class="PersonajesAPI">
                    {
                        posts.map( u => (
                            <>
                                <div className=''>
                                    <div class="cardAPI card-persoAPI card">
                                        <div class ="imgcontent">
                                            <img src={u.img} class="card-img-top" alt={u.img}/>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">{u.nombre}</h5>
                                            <p class="card-text">Edad: {u.edad}</p>
                                            <p class="card-text">Count: {u.countC}</p>
                                            <p class="card-text">Especie: {u.especie}</p>
                                            <p><a href={`/Personajes/${u.id}`} class="btn btn-outline-secondary">Detail</a></p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default PersonajesApi;