import Form from 'react-bootstrap/Form';
import ComponentNavbar from './ComponentNavbar';
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";
import { Context } from "../store/AppContext.js"
import { Link } from 'react-router-dom';

function Recuperar_Clave() {
  const { store, actions } = useContext(Context);
  const [login_email, setEmail] = useState("");
  const [telefono, setTelefono]= useState("");
  return (


    

    
    <form>
      <div  style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)" }}>
        <ComponentNavbar />

       

        <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "50%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>
          <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Cambio de clave</h1>
          <form justify="center" style={{ width: "38rem" }}>


            <div className="mb-3" style={{ width: "25rem", }}>

              <label className="form-label">Ingresa tu correo</label>
              <input type="email" className="form-control"
                onChange={e => setEmail(e.target.value)}
                value={login_email}
                id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="email@e-mail.com" />
              <div id="emailHelp" className="form-text"></div>
            </div>

            <div style={{ margin: "10px" }}>
              <label htmlFor="phone">Teléfono móvil</label>
              <br />
              <input id="phone" type="tel" aria-describedby="phoneHelp" 
              placeholder="+569" 
              onChange={e => setTelefono(e.target.value)}
              value={ telefono}
              />
            </div>
            <br />
            <br />
            <Link to="/cambiar/clave/:token">
              <button type="submit" className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  actions.recuperar_clave_funcion(login_email, telefono);

                }} >
                Submit
              </button>
            </Link>
          </form>

        </div >
        <Footer />
        </div>
        </form>
     


  );
}

export default Recuperar_Clave;



