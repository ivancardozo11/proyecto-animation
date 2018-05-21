import React, { Component } from 'react';
import logoWhite from '../images/invie-white.png';

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <div className="contenedor">
            <div className="contacto">
              <img src={logoWhite} alt="logotipo blanco"/>
              <a href="tel:+541139199268"><strong>Telefono</strong><span>3024456678</span></a>
              <a href="mailto:contacto@invie.com"> <strong>E-mail</strong><span>contacto@invie.com</span></a>
            </div>
             <form className="formulario">
              <div className="col1">
                 <label htmlFor="nombre">Nombre</label>
                 <input type="text" required  id="nombre"name="nombre"/>
                 <label htmlFor="email">E-mail</label>
                 <input type="email" required id="email" name="email"/>
                 <div className="sexo">
                 <label htmlFor="mujer">
                   <input type="radio"defaultChecked name="sexo"  id="mujer" value="mujer"/>Mujer
                 /</label>
                 <label htmlFor="hombre">
                 <input type="radio" id="hombre" name="sexo" value="hombre"/>Hombre
                 </label>
                 </div>
              <div className="intereses">
                <label htmlFor="cotizacion">
                <input type="checkbox" name="intereses" defaultChecked id="cotizacion" value="cotizacion"/>Cotizacion
                </label>
                <label htmlFor="reclamos">
                <input type="checkbox" name="intereses" id="reclamos" value="reclamos"/>Reclamos
                </label>
                <label htmlFor="comentarios">
                <input type="checkbox" name="intereses" id="comentarios" value="comentarios"/>Comentarios
                </label>
                <label htmlFor="otros">
                 <input type="checkbox" name="intereses" id="otros" value="otros"/>Otros
                </label>
         </div>
         </div>
         <div className="col2">
           <label htmlFor="comentarios">Comentarios</label>
           <textarea name="name" id="comentarios" rows="7" cols="30"></textarea>
           <input type="submit"  value="Enviar" className="button"/>
         </div>
         </form>
       </div>
      </footer>)
  }
}
export default Footer;
