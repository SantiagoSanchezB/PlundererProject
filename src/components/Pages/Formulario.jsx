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
            <div id="Elemento" class="ElementCls">
                <h1>Form for Contact</h1>
                <form action="">
                    <label htmlFor="">Email</label>
                    <input class="form-control name form_input" type="email" name="nombre" placeholder="Ingrese el nombre" /*onChange={
                        (i) => this.setState({
                            nombre: i.target.value
                        })
                    }*//>
                    {/* <div id="emailHelp" class="form-text">{`Nombre ${this.state.nombre}`}</div> */}<br/>
                    <hr class="col-sm-5 dropdown-divider name"/>
                    <label htmlFor="">Comment</label>
                    {/*<input class="form-control name form_input" type="text" name="apellido" placeholder="Ingrese el nombre" onChange={
                        (i) => this.setState({
                            apellido: i.target.value
                        })
                    }/>*/}
                    <textarea class="form-control name" id="exampleFormControlTextarea1" rows="3"></textarea>
                    {/*<div id="emailHelp" class="form-text">{`Apellido ${this.state.apellido}`}</div>*/}<br/>
                    <input class="btn btn-success s-100" type="button" value="Enviar" data-bs-toggle="modal" data-bs-target="#SuccessRegistry"/>
                </form>
                <div class="modal fade" id="SuccessRegistry" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>

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