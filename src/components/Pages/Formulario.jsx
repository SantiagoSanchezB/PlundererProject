import React, {Component} from 'react';
import '../../assets/css/index_css.css';

class Formulario extends Component{
    constructor (props){
        super(props)

        this.state = {
            nombre : "",
            apellido: ""
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarApellido = this.cambiarApellido.bind(this);
    }

    cambiarNombre(e){
        this.setState({
            Nombre: e.target.value
        });
    }

    cambiarApellido(e){
        this.setState({
            Apellido: e.target.value
        });
    }

    render(){
        return(
            <div id="Elemento" class="Element">
                <h1>Form for Contact</h1>
                <form action="">
                    <label htmlFor="">Email</label>
                    <input class="form-control name form_input" type="text" name="nombre" placeholder="Ingrese el nombre" onChange={
                        (i) => this.setState({
                            nombre: i.target.value
                        })
                    }/>
                    <div id="emailHelp" class="form-text">{`Nombre ${this.state.nombre}`}</div>
                    <hr class="col-sm-5 dropdown-divider name"/>
                    <label htmlFor="">Password</label>
                    <input class="form-control name form_input" type="text" name="apellido" placeholder="Ingrese el nombre" onChange={
                        (i) => this.setState({
                            apellido: i.target.value
                        })
                    }/>
                    <div id="emailHelp" class="form-text">{`Apellido ${this.state.apellido}`}</div><br/>
                    <input class="btn btn-success" type="submit" value="Enviar"/>
                </form>
            </div>
        )
    }

    componentDidMount(){
        let Elemento = document.getElementById("Elemento")
        console.log(Elemento)
    }

    componentDidUpdate(prevProps, prevState){ 
        console.log(prevState);
        console.log(prevProps);
        console.log("-----------------------")
    }
}

export default Formulario;