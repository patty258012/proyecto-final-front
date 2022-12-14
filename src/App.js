import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from "./store/AppContext";
import Home from "./views/Home";
import Login from "./componet/Login";
import Registration from "./componet/Registration";
import CardTajetas from "../src/componet/Productos";
import CupcakeParadise from "./componet/CupcakeParadise";
import DisfracesFantasia from "./componet/DisfracesFantasia";
import ElEstudiante from "./componet/ElEstudiante";
import ElQuijotedelaMancha from "./componet/ElQuijotedelamancha";
import LaTiendita from "./componet/LaTiendita";
import Marcas from "./componet/Marcas";
import SaborDivino from "./componet/SaborDivino";
import BellaPandora from "./componet/BellaPandora";
import Productos from "./componet/Productos";
import DatosUsuario from "./componet/DatosUsuario";
import Formulario from "./componet/Formulario";
import Compras from "./componet/Compras";
import Registro_Producto from "./componet/Registro_Producto";
import MisProductos from "./componet/MisProductos";


import Recuperar_Clave from "./componet/Recuperar_clave";
import Cambiar_Clave from "./componet/Cambiar_Clave";


function App() {
    return (
        <BrowserRouter>
       
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={< Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/Productos" element={<Productos/>} />
                <Route path="/CardTajetas" element={<CardTajetas />} />
                <Route path="/CupcakeParadise" element={<CupcakeParadise />} />
                <Route path="/DisfracesFantasia" element={<DisfracesFantasia/>} />
                <Route path="/ElEstudiante" element={<ElEstudiante/>} />
                <Route path="/ElQuijotedelaMancha" element={<ElQuijotedelaMancha/>} />
                <Route path="/LaTiendita" element={<LaTiendita/>} />
                <Route path="/Marcas" element={<Marcas />} />
                <Route path="/registro_producto" element={<Registro_Producto/>} />
                <Route path="/SaborDivino" element={<SaborDivino />} />
                <Route path="/MisProductos" element={<MisProductos />} />
                <Route path="/BellaPandora" element={<BellaPandora/>} />
                <Route path="/DatosUsuario" element={<DatosUsuario/>} />
                <Route path="/Formulario" element={<Formulario/>} />
                <Route path="/Compras" element={<Compras/>} />
                <Route path="/recuperar/clave" element={<Recuperar_Clave/>} />
                <Route path="/cambiar/clave/:token" element={<Cambiar_Clave/>} />
                
                
               

            </Routes>
           
        </BrowserRouter>
    );
}

export default injectContext(App);