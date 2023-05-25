import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pgaqpwd', 'template_ubba12u', form.current, '80BBsmBQNC4YRJebH')
      .then((result) => {
          console.log(result.text);
          alert("Se envio correctamente");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="Elemento" class="ElementCls">
                <h1>Coments</h1>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <label htmlFor="">Nombre</label>
                    <input class="form-control form_input" type="text" name="user_name" placeholder="Please digit your name"/>
                    <br/>
                    <label htmlFor="">Email</label>
                    <input class="form-control form_input" type="email" name="user_email" placeholder="Please digit your name"/>
                    <br/>
                    <hr class="col-sm-7 dropdown-divider name"/>
                    <label htmlFor="">Comment</label>
                    <textarea class="form-control name" rows="3" name='message'></textarea>
                    <br/>
                    <input class="btn btn-success btn-coment s-100" type="submit" value="Enviar"/>
                </form>
            </div>
  );
};

export default Formulario;