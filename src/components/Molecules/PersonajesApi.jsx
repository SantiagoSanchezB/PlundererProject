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
        axios.get('https://my-json-server.typicode.com/SantiagoSanchezB/DataJs-Plundere/Personajes')
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
                    {
                        posts.map( u => (
                            <>
                                <div className='PersonajesAPI'>
                                    <div class="cardAPI card-persoAPI">
                                        <div class ="imgcontent">
                                            <img src={u.img} class="card-img-top" alt={u.img}/>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">{u.nombre}</h5>
                                            <p class="card-text">Edad: {u.edad}</p>
                                            <p class="card-text">Count: {u.count}</p>
                                            <p class="card-text">Especie: {u.specie}</p>
                                            <p><a href={`/Personajes/${u.id}`} class="btn btn-outline-secondary">Detalle</a></p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
            </>
        )
    }
}

export default PersonajesApi;