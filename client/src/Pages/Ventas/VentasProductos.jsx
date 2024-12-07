
import Tabla from "../../Components/Tabla";
import BtnEspecial from "../../Components/BtnEspecial";
import { bdVentaProductos, propiedadesVentaProductos } from "../../data/bdVentaProductos.json";

import {Typography} from "@material-tailwind/react";


const VentasProductos = () => {
  

  return (
    <div className="m-10">  
      <Typography variant="h2" className="text-center">
        Venta de Productos
      </Typography>
      <div>
      <Tabla propiedadesBd={propiedadesVentaProductos}  bd={bdVentaProductos} edit='true' title={"venta de productos"} eliminar='true'/>
      <div className={"my-5"}>
      <BtnEspecial propiedadesBd={propiedadesVentaProductos} type={"new"} titulo={"producto"} genero={"f"}/>
      </div>
      
      </div>
    </div>
  );
}

export default VentasProductos;